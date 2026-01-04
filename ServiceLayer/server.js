const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const businessManager = require('../BusinessLayer/businessManager'); 
const guiManager = require('../BusinessLayer/guiManager.js');

const securityManager = require('../BusinessLayer/securityManager');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../PresentationLayer/')));
app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: false }));
securityManager.initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// Routes de base
// et ensuite tu peux faire
app.get('/', (req, res) => {
  res.send(guiManager.renderHomePage());
});
app.post('/about', (req, res) => res.end(guiManager.renderAboutPage()));
app.post('/register', (req, res) => res.end(guiManager.renderRegistrationPage()));
app.get('/cancel', (req, res) => res.end(guiManager.renderHomePage()));
app.post('/cancel', (req, res) => res.end(guiManager.renderHomePage()));
app.get('/login', (req, res) => res.end(guiManager.renderAuthenticationPage()));
app.post('/login', (req, res) => res.end(guiManager.renderAuthenticationPage()));

app.post('/auth',
  passport.authenticate('local', { 
    failureRedirect: '/login', 
    successRedirect: '/loginSuccess', 
    failureFlash: false 
  })
);

app.get('/loginSuccess', (req, res) => res.end(guiManager.renderMainPage()));

// ============= TEMPERATURE ROUTES =============
app.post('/firstTemperature', securityManager.verifyRole(['admin','user','guest']), async (req, res) => {
  try {
    const data = await businessManager.getFirstTemperature();
    res.json({
      type: 'temperature',
      temperature: data[0].temperature_value,
      cluster: data[0].temperature_cluster,
      sensor: data[0].temperature_sensor,
      title: 'First Temperature'
    });
  } catch (error) {
    res.status(500).json({ type: 'error', message: 'Error fetching first temperature' });
  }
});

app.post('/lastTemperature', securityManager.verifyRole(['admin','user','guest']), async (req, res) => {
  try {
    const data = await businessManager.getLastTemperature();
    res.json({
      type: 'temperature',
      temperature: data[0].temperature_value,
      cluster: data[0].temperature_cluster,
      sensor: data[0].temperature_sensor,
      title: 'Last Temperature'
    });
  } catch (error) {
    res.status(500).json({ type: 'error', message: 'Error fetching last temperature' });
  }
});

app.post('/temperatureList', securityManager.verifyRole(['admin','user']), async (req, res) => {
  try {
    const data = await businessManager.getTemperatureList();
    const temperatures = data.map(item => ({
      cluster: item.temperature_cluster,
      sensor: item.temperature_sensor,
      temperature: item.temperature_value
    }));
    
    res.json({
      type: 'list',
      dataType: 'temperature',
      temperatures: temperatures
    });
  } catch (error) {
    res.status(500).json({ type: 'error', message: 'Error fetching temperature list' });
  }
});

// ============= HUMIDITY ROUTES =============
app.post('/firstHumidity', securityManager.verifyRole(['admin','user','guest']), async (req, res) => {
  try {
    const data = await businessManager.getFirstHumidity();
    res.json({
      type: 'humidity',
      humidity: data[0].humidity_value,
      cluster: data[0].humidity_cluster,
      sensor: data[0].humidity_sensor,
      title: 'First Humidity'
    });
  } catch (error) {
    res.status(500).json({ type: 'error', message: 'Error fetching first humidity' });
  }
});

app.post('/lastHumidity', securityManager.verifyRole(['admin','user','guest']), async (req, res) => {
  try {
    const data = await businessManager.getLastHumidity();
    res.json({
      type: 'humidity',
      humidity: data[0].humidity_value,
      cluster: data[0].humidity_cluster,
      sensor: data[0].humidity_sensor,
      title: 'Last Humidity'
    });
  } catch (error) {
    res.status(500).json({ type: 'error', message: 'Error fetching last humidity' });
  }
});

app.post('/humidityList', securityManager.verifyRole(['admin','user']), async (req, res) => {
  try {
    const data = await businessManager.getHumidityList();
    const humidities = data.map(item => ({
      cluster: item.humidity_cluster,
      sensor: item.humidity_sensor,
      humidity: item.humidity_value
    }));
    
    res.json({
      type: 'list',
      dataType: 'humidity',
      humidities: humidities
    });
  } catch (error) {
    res.status(500).json({ type: 'error', message: 'Error fetching humidity list' });
  }
});

// ============= DASHBOARD ROUTE =============
app.post('/dashboard', securityManager.verifyRole(['admin','user','guest']), async (req, res) => {
  try {
    const data = await businessManager.getDashboardData();
    res.json({
      type: 'dashboard',
      temperatures: data.temperatures.map(t => ({
        cluster: t.temperature_cluster,
        sensor: t.temperature_sensor,
        value: t.temperature_value
      })),
      humidities: data.humidities.map(h => ({
        cluster: h.humidity_cluster,
        sensor: h.humidity_sensor,
        value: h.humidity_value
      })),
      lastTemperature: data.lastTemperature ? data.lastTemperature.temperature_value : null,
      lastHumidity: data.lastHumidity ? data.lastHumidity.humidity_value : null
    });
  } catch (error) {
    res.status(500).json({ type: 'error', message: 'Error fetching dashboard data' });
  }
});

// Sensor management
app.post('/addSensor', securityManager.verifyRole(['admin']), async (req, res) => {
  res.json({ type: 'info', message: 'Add sensor functionality - Coming soon!' });
});

// IoT endpoint pour ESP32
app.post('/api/iot/temperature', async (req, res) => {
  const { cluster, sensor, temperature, humidity } = req.body;

  if (!cluster || !sensor || temperature === undefined) {
    return res.status(400).json({ message: "Invalid data" });
  }

  await businessManager.addTemperature(cluster, sensor, temperature);
  
  if (humidity !== undefined) {
    await businessManager.addHumidity(cluster, sensor, humidity);
  }

  console.log("📡 Donnée IoT reçue:", { cluster, sensor, temperature, humidity });
  res.status(200).json({ message: "Data received" });
});

app.post('/cancelRequest', (req, res) => res.redirect('/'));

app.post('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});