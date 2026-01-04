class DatabaseSingleton {
  static DatabaseInstance = null;

  constructor() {
    // Données initiales pour températures
    this.temperatures = [
      {
        temperature_id: 1,
        temperature_cluster: 'InitCluster',
        temperature_sensor: 'InitSensor',
        temperature_value: 22.5
      }
    ];

    // Données initiales pour humidités
    this.humidities = [
      {
        humidity_id: 1,
        humidity_cluster: 'InitCluster',
        humidity_sensor: 'InitSensor',
        humidity_value: 65.0
      }
    ];

    this.users = [];
  }

  static getDatabaseInstance() {
    if (!DatabaseSingleton.DatabaseInstance) {
      DatabaseSingleton.DatabaseInstance = new DatabaseSingleton();
    }
    return DatabaseSingleton.DatabaseInstance;
  }

  // TEMPERATURES
  addTemperature(temperature) {
    this.temperatures.push(temperature);
  }

  getTemperatures() {
    return this.temperatures;
  }

  // HUMIDITIES
  addHumidity(humidity) {
    this.humidities.push(humidity);
  }

  getHumidities() {
    return this.humidities;
  }
}

module.exports = { DatabaseSingleton };