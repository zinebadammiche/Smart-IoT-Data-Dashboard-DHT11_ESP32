#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"

#define DHTPIN 23
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

// 🔹 WiFi
const char* ssid     = "Inwi Home 64898898768";
const char* password = "1234567890";

// 🔹 API Node.js
const char* serverURL = "http://10.134.48.132:3000/api/iot/temperature";

void setup() {
  Serial.begin(115200);
  dht.begin();

  Serial.println("==== Démarrage ESP32 ====");
  Serial.print("Connexion WiFi");

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi connecté !");
  Serial.print("IP locale: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  delay(5000);

  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  // Vérifier si le capteur répond
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("[ERREUR] Capteur DHT11 non disponible !");
    return;
  }

  // 🔹 Affichage sur Serial
  Serial.println("------ Mesure DHT11 ------");
  Serial.print("Température : "); Serial.print(temperature); Serial.println(" °C");
  Serial.print("Humidité    : "); Serial.print(humidity); Serial.println(" %");
  Serial.println("---------------------------");

  // 🔹 Envoi vers serveur
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverURL);
    http.addHeader("Content-Type", "application/json");

    String jsonPayload = "{";
    jsonPayload += "\"cluster\":\"ESP32_Cluster\",";
    jsonPayload += "\"sensor\":\"DHT11_ESP32\",";
    jsonPayload += "\"temperature\":" + String(temperature) + ",";
    jsonPayload += "\"humidity\":" + String(humidity);
    jsonPayload += "}";

    int httpResponseCode = http.POST(jsonPayload);
    Serial.println("Réponse serveur HTTP: " + String(httpResponseCode));

    http.end();
  } else {
    Serial.println("[ERREUR] WiFi non connecté !");
  }
}
