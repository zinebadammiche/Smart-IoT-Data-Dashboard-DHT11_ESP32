const daoManager = require('../DAOLayer/DAOManager'); 

// ============= TEMPERATURE =============
async function addTemperature(temperatureCluster, temperatureSensor, temperatureValue) {
  const data = await daoManager.createTemperature(temperatureCluster, temperatureSensor, temperatureValue);
  return data;
}

async function getFirstTemperature() {
  const data = await daoManager.readFirstTemperature();
  return data;
}

async function getLastTemperature() {
  const data = await daoManager.readLastTemperature();
  return data;
}

async function getTemperatureList() {
  const data = await daoManager.readAllTemperatures();
  return data;
}

// ============= HUMIDITY =============
async function addHumidity(humidityCluster, humiditySensor, humidityValue) {
  const data = await daoManager.createHumidity(humidityCluster, humiditySensor, humidityValue);
  return data;
}

async function getFirstHumidity() {
  const data = await daoManager.readFirstHumidity();
  return data;
}

async function getLastHumidity() {
  const data = await daoManager.readLastHumidity();
  return data;
}

async function getHumidityList() {
  const data = await daoManager.readAllHumidities();
  return data;
}

// ============= DASHBOARD =============
async function getDashboardData() {
  const temperatures = await daoManager.readAllTemperatures();
  const humidities = await daoManager.readAllHumidities();
  
  return {
    temperatures,
    humidities,
    lastTemperature: temperatures[temperatures.length - 1],
    lastHumidity: humidities[humidities.length - 1]
  };
}

module.exports = { 
  addTemperature, 
  getTemperatureList, 
  getFirstTemperature, 
  getLastTemperature,
  addHumidity,
  getHumidityList,
  getFirstHumidity,
  getLastHumidity,
  getDashboardData
};