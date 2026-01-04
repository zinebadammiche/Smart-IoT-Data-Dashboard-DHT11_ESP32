
const SerialPort = require('serialport');   // npm install serialport
const Readline = require('@serialport/parser-readline');

class TemperatureSensor {
    constructor(name, cluster, portPath) {
      this.name    = name;
      this.cluster = cluster;
      this.value   = 0;
      this.portPath = portPath;  // Exemple: 'COM3' ou '/dev/ttyUSB0'
      this.port    = new SerialPort(this.portPath, { baudRate: 9600 });
      this.parser  = this.port.pipe(new Readline({ delimiter: '\n' }));
    }

    async getSensorValue(dataID) {
      return new Promise((resolve, reject) => {
        this.parser.once('data', (line) => {
          const value = parseFloat(line.trim()); // Arduino envoie "25.3\n"
          this.value = value;
          resolve({ temperature_id: dataID, temperature_cluster: this.cluster, temperature_sensor: this.name, temperature_value: value });
        });
      });
    }
 

      
    getSensorName() {
      return this.name;
    }
     
    setSensorName(name) {
      this.name = name;
    }

    getSensorCluster() {
      return this.cluster;
    }
    setSensorCluster(cluster) {
      this.cluster = cluster;
    }

    getSensorValue(dataID) {
      var value = Math.floor(Math.random() * 101) % 60;
      this.siblings.forEach(sb => {
        //value += sb.getSensorValue();
      });
      this.setSensorValue(value);
      return {temperature_id: dataID, temperature_cluster: this.cluster, temperature_sensor: this.name, temperature_value: value};
    }
   
    setSensorValue(value) {
      this.value = value;
    }

    getSensorSiblings() {
      return this.siblings;
    }
    
    isClusterHead() {
      return true;
    }

}//End TemperatureSensor Class


module.exports = { TemperatureSensor };