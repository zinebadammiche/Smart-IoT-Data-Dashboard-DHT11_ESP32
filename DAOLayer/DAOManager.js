const databaseManager = require('../DataLayer/databaseManager');

// ============= TEMPERATURE =============
async function createTemperature(temperatureCluster, temperatureSensor, temperatureValue) {
  const results = await databaseManager.executeInsertTemperatureQuery(temperatureCluster, temperatureSensor, temperatureValue);
  const data = await databaseManager.executeSelectLastTemperatureQuery();  
  return data;
}

async function readFirstTemperature() {
  const data = await databaseManager.executeSelectFirstTemperatureQuery();
  return data;
}

async function readLastTemperature() {
  const data = await databaseManager.executeSelectLastTemperatureQuery();
  return data;
}

async function readAllTemperatures() {
  const data = await databaseManager.executeSelectAllTemperaturesQuery();
  return data;
}

// ============= HUMIDITY =============
async function createHumidity(humidityCluster, humiditySensor, humidityValue) {
  const results = await databaseManager.executeInsertHumidityQuery(humidityCluster, humiditySensor, humidityValue);
  const data = await databaseManager.executeSelectLastHumidityQuery();  
  return data;
}

async function readFirstHumidity() {
  const data = await databaseManager.executeSelectFirstHumidityQuery();
  return data;
}

async function readLastHumidity() {
  const data = await databaseManager.executeSelectLastHumidityQuery();
  return data;
}

async function readAllHumidities() {
  const data = await databaseManager.executeSelectAllHumiditiesQuery();
  return data;
}

module.exports = { 
  createTemperature, 
  readFirstTemperature, 
  readLastTemperature, 
  readAllTemperatures,
  createHumidity,
  readFirstHumidity,
  readLastHumidity,
  readAllHumidities
};