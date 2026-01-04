const database = require('../DataLayer/database'); 

function getConnectionDB() {
  return database.DatabaseSingleton.getDatabaseInstance();
}

function disconnectDB(connectionDB) {
  return null;
}

// ============= TEMPERATURE =============
async function executeInsertTemperatureQuery(temperatureCluster, temperatureSensor, temperatureValue) { 
  const connectionDB = getConnectionDB();
  const MaxID = connectionDB.getTemperatures().length;
  const temperatureID = MaxID + 1;
  
  const newTemperature = {
    temperature_id: temperatureID, 
    temperature_cluster: temperatureCluster, 
    temperature_sensor: temperatureSensor, 
    temperature_value: parseFloat(temperatureValue)
  };
  
  connectionDB.getTemperatures().push(newTemperature);
  disconnectDB(connectionDB); 
  return [newTemperature];    
}

async function executeSelectFirstTemperatureQuery() {   
  const connectionDB = getConnectionDB();
  const temperatures = connectionDB.getTemperatures();
  const firstTemperature = temperatures[0];
  disconnectDB(connectionDB);  
  return [firstTemperature];   
}

async function executeSelectLastTemperatureQuery() { 
  const connectionDB = getConnectionDB();
  const temperatures = connectionDB.getTemperatures();
  const lastTemperature = temperatures[temperatures.length - 1];
  disconnectDB(connectionDB);  
  return [lastTemperature];   
}

async function executeSelectAllTemperaturesQuery() { 
  const connectionDB = getConnectionDB();
  disconnectDB(connectionDB);
  return connectionDB.getTemperatures();
}

// ============= HUMIDITY =============
async function executeInsertHumidityQuery(humidityCluster, humiditySensor, humidityValue) { 
  const connectionDB = getConnectionDB();
  const MaxID = connectionDB.getHumidities().length;
  const humidityID = MaxID + 1;
  
  const newHumidity = {
    humidity_id: humidityID, 
    humidity_cluster: humidityCluster, 
    humidity_sensor: humiditySensor, 
    humidity_value: parseFloat(humidityValue)
  };
  
  connectionDB.getHumidities().push(newHumidity);
  disconnectDB(connectionDB); 
  return [newHumidity];    
}

async function executeSelectFirstHumidityQuery() {   
  const connectionDB = getConnectionDB();
  const humidities = connectionDB.getHumidities();
  const firstHumidity = humidities[0];
  disconnectDB(connectionDB);  
  return [firstHumidity];   
}

async function executeSelectLastHumidityQuery() { 
  const connectionDB = getConnectionDB();
  const humidities = connectionDB.getHumidities();
  const lastHumidity = humidities[humidities.length - 1];
  disconnectDB(connectionDB);  
  return [lastHumidity];   
}

async function executeSelectAllHumiditiesQuery() { 
  const connectionDB = getConnectionDB();
  disconnectDB(connectionDB);
  return connectionDB.getHumidities();
}

module.exports = { 
  executeInsertTemperatureQuery, 
  executeSelectFirstTemperatureQuery, 
  executeSelectLastTemperatureQuery, 
  executeSelectAllTemperaturesQuery,
  executeInsertHumidityQuery,
  executeSelectFirstHumidityQuery,
  executeSelectLastHumidityQuery,
  executeSelectAllHumiditiesQuery
};