// ============= STYLE COMMUN =============
const commonStyles = `
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #ffffff;
  color: #1e293b;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  padding: 20px;
  min-height: 100vh;
}

/* ===== CONTAINERS ===== */
.page-container {
  max-width: 700px;
  margin: auto;
}

.card {
  background: #ffffff;
  border-radius: 24px;
  padding: 35px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

/* ===== HEADERS ===== */
header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 2.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  font-size: 1.2rem;
  color: #475569;
  margin-top: 10px;
}

/* ===== BUTTONS ===== */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.button-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.btn {
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  color: white;
  border: none;
  padding: 16px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37,99,235,0.35);
}

.btn-warning {
  background: linear-gradient(135deg, #f97316, #ef4444);
}

.btn-secondary {
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
}

.btn-success {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

/* ===== FORM ===== */
.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}

input {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #cbd5f5;
  font-size: 1rem;
}

/* ===== RESPONSIVE ===== */
@media(max-width:768px){
  .button-row {
    grid-template-columns: 1fr;
  }
}
</style>
`;


// ============= HOME PAGE =============

function renderHomePage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TemperatureSense - Home</title>
  ${commonStyles}
</head>
<body>
  <div class="page-container">
    <header>
      <h1>🌡️ TemperatureSense</h1>
      <h2>IoT Temperature & Humidity Monitoring Platform</h2>
    </header>

    <div class="card">
      <h2 style="text-align: center; margin-bottom: 30px;">Welcome to the Future of IoT Monitoring</h2>
      
      <form method="post">
        <div class="button-group">
          <button class="btn btn-primary" type="submit" formaction="/about">
            <span class="icon">ℹ️</span>About This Application
          </button>
          <button class="btn btn-success" type="submit" formaction="/login">
            <span class="icon">🔐</span>Login to Your Account
          </button>
          <button class="btn btn-secondary" type="submit" formaction="/register">
            <span class="icon">📝</span>Register New Account
          </button>
        </div>
      </form>
    </div>
  </div>
</body>
</html>
  `;
}

// ============= ABOUT PAGE =============

function renderAboutPage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About - TemperatureSense</title>
  ${commonStyles}
  <style>
    .feature-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin: 30px 0;
    }

    .feature-card {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 15px;
      padding: 20px;
      border-left: 4px solid #f093fb;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(10px);
    }

    .feature-icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .feature-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 10px;
      color: #f093fb;
    }

    .feature-desc {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.8);
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="page-container" style="max-width: 800px;">
    <header>
      <h1>📖 About TemperatureSense</h1>
    </header>

    <div class="card">
      <h2 style="margin-bottom: 30px;">Master IoTBigData - IoT Platforms & Protocols</h2>
      
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px; color: rgba(255,255,255,0.9);">
        This application demonstrates the power of IoT platforms and protocols for real-time 
        temperature and humidity monitoring using ESP32 microcontrollers and DHT11 sensors.
      </p>

      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🌡️</div>
          <div class="feature-title">Real-Time Monitoring</div>
          <div class="feature-desc">
            Monitor temperature and humidity data in real-time from multiple IoT sensors 
            deployed across different clusters.
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <div class="feature-title">Interactive Dashboard</div>
          <div class="feature-desc">
            Visualize your data with beautiful, interactive gauges and charts that update 
            dynamically as new measurements arrive.
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <div class="feature-title">Secure Access</div>
          <div class="feature-desc">
            Role-based authentication system ensuring that only authorized users can access 
            and manage sensor data.
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📡</div>
          <div class="feature-title">IoT Integration</div>
          <div class="feature-desc">
            Seamless integration with ESP32 devices using WiFi connectivity and RESTful APIs 
            for reliable data transmission.
          </div>
        </div>
      </div>

      <form method="post" style="margin-top: 40px;">
        <div class="button-row">
          <button class="btn btn-success" type="submit" formaction="/login">
            <span class="icon">🔐</span>Login
          </button>
          <button class="btn btn-secondary" type="submit" formaction="/register">
            <span class="icon">📝</span>Register
          </button>
        </div>
      </form>
    </div>
  </div>
</body>
</html>
  `;
}

// ============= REGISTRATION PAGE =============

function renderRegistrationPage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register - TemperatureSense</title>
  ${commonStyles}
</head>
<body>
  <div class="page-container">
    <header>
      <h1>📝 Create Account</h1>
      <h2>Join the TemperatureSense Platform</h2>
    </header>

    <div class="card">
      <div style="text-align: center; padding: 60px 20px;">
        <div style="font-size: 4rem; margin-bottom: 20px;">🚧</div>
        <h2 style="margin-bottom: 20px;">Registration Coming Soon</h2>
        <p style="font-size: 1.1rem; color: rgba(255,255,255,0.8); line-height: 1.6;">
          We're working hard to bring you a seamless registration experience. 
          This feature will be available soon!
        </p>
      </div>

      <form method="post">
        <div class="button-row">
          <button class="btn btn-success" type="submit" formaction="/login">
            <span class="icon">🔐</span>Login Instead
          </button>
          <button class="btn btn-secondary" type="submit" formaction="/">
            <span class="icon">🏠</span>Go Home
          </button>
        </div>
      </form>
    </div>
  </div>
</body>
</html>
  `;
}

// ============= AUTHENTICATION PAGE =============

function renderAuthenticationPage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - TemperatureSense</title>
  ${commonStyles}
</head>
<body>
  <div class="page-container">
    <header>
      <h1>🔐 Welcome Back</h1>
      <h2>Login to Access Your Dashboard</h2>
    </header>

    <div class="card">
      <form method="post">
        <div class="form-group">
          <label for="username">👤 Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your username"
            required
          >
        </div>

        <div class="form-group">
          <label for="password">🔑 Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password"
            required
          >
        </div>

        

        <div class="button-row">
          <button class="btn btn-primary" type="submit" formaction="/auth">
            <span class="icon">✅</span>Login
          </button>
          <button class="btn btn-warning" type="submit" formaction="/cancel">
            <span class="icon">❌</span>Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</body>
</html>
  `;
}

// ============= ADD SENSOR PAGE =============

function renderAddSensorPage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add Sensor - TemperatureSense</title>
  ${commonStyles}
</head>
<body>
  <div class="page-container">
    <header>
      <h1>➕ Add New Sensor</h1>
      <h2>Configure IoT Device</h2>
    </header>

    <div class="card">
      <div style="text-align: center; padding: 60px 20px;">
        <div style="font-size: 4rem; margin-bottom: 20px;">🔧</div>
        <h2 style="margin-bottom: 20px;">Sensor Management</h2>
        <p style="font-size: 1.1rem; color: rgba(255,255,255,0.8); line-height: 1.6;">
          The sensor configuration interface is currently under development. 
          You can still view existing sensor data from the main dashboard.
        </p>
      </div>

      <form method="post">
        <div class="button-group">
          <button class="btn btn-primary" type="submit" formaction="/firstTemperature">
            <span class="icon">🌡️</span>First Temperature
          </button>
          <button class="btn btn-primary" type="submit" formaction="/lastTemperature">
            <span class="icon">🌡️</span>Last Temperature
          </button>
          <button class="btn btn-secondary" type="submit" formaction="/temperatureList">
            <span class="icon">📋</span>Temperature List
          </button>
          <button class="btn btn-warning" type="submit" formaction="/logout">
            <span class="icon">🚪</span>Logout
          </button>
        </div>
      </form>
    </div>
  </div>
</body>
</html>
  `;
}

// ============= HTML RESULT PAGE =============

function renderHtmlResult(message, data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Result - TemperatureSense</title>
  ${commonStyles}
  <style>
    .result-box {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 15px;
      padding: 30px;
      margin: 20px 0;
      border-left: 4px solid #f093fb;
    }

    pre {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      padding: 20px;
      overflow-x: auto;
      font-size: 0.9rem;
      line-height: 1.6;
      color: #f093fb;
    }
  </style>
</head>
<body>
  <div class="page-container" style="max-width: 800px;">
    <header>
      <h1>📊 Result</h1>
    </header>

    <div class="card">
      <h2 style="margin-bottom: 25px;">${message}</h2>
      
      ${data && data.length > 0 ? `
        <div class="result-box">
          <pre>${JSON.stringify(data, null, 2)}</pre>
        </div>
      ` : ''}

      <form method="post" style="margin-top: 30px;">
        <button class="btn btn-primary" type="submit" formaction="/">
          <span class="icon">🏠</span>Back to Home
        </button>
      </form>
    </div>
  </div>
</body>
</html>
  `;
}

// ============= MAIN PAGE (DASHBOARD) =============

function renderMainPage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IoT Dashboard - TemperatureSense</title>
   <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #ffffff;
      color: #1e293b;
      font-family: 'Inter', 'Segoe UI', sans-serif;
      padding: 20px;
      min-height: 100vh;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    header {
      text-align: center;
      margin-bottom: 40px;
      animation: fadeInDown 0.8s ease;
    }

    h1 {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, #2563eb, #38bdf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #475569;
      font-weight: 300;
    }

    .control-panel {
      background: #ffffff;
      border-radius: 30px;
      padding: 30px;
      margin-bottom: 30px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 15px 40px rgba(0,0,0,0.08);
      animation: fadeInUp 0.8s ease 0.2s both;
    }

    .button-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-bottom: 20px;
    }

    .btn {
      background: linear-gradient(135deg, #2563eb, #38bdf8);
      color: #fff;
      border: none;
      padding: 18px 24px;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 15px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.6s;
    }

    .btn:hover::before {
      left: 100%;
    }

    .btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 15px 40px rgba(37, 99, 235, 0.35);
    }

    .btn:active {
      transform: translateY(-1px);
    }

    .btn-dashboard {
      background: linear-gradient(135deg, #2563eb, #1e40af);
      grid-column: span 2;
      font-size: 1.1rem;
      padding: 22px;
    }

    .btn-logout {
      background: linear-gradient(135deg, #f97316, #ef4444);
    }

    #result {
      min-height: 400px;
      opacity: 0;
      transition: opacity 0.5s ease;
      animation: fadeInUp 0.8s ease 0.4s both;
    }

    #result.show {
      opacity: 1;
    }

    .gauge-card {
      background: #ffffff;
      border-radius: 30px;
      padding: 40px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 15px 40px rgba(0,0,0,0.08);
      animation: scaleIn 0.6s ease;
    }

    .gauge-title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 10px;
      font-weight: 700;
      color: #1e293b;
    }

    .gauge-subtitle {
      text-align: center;
      color: #475569;
      font-size: 1rem;
      margin-bottom: 30px;
    }

    .gauge-wrapper {
      position: relative;
      width: 320px;
      height: 320px;
      margin: 0 auto 30px;
    }

    .gauge-svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
      filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1));
    }

    .gauge-background {
      fill: none;
      stroke: #e5e7eb;
      stroke-width: 25;
    }

    .gauge-progress {
      fill: none;
      stroke-width: 25;
      stroke-linecap: round;
      transition: stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s ease;
    }

    .gauge-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .value-display {
      font-size: 4.5rem;
      font-weight: 900;
      line-height: 1;
      background: linear-gradient(135deg, #2563eb, #38bdf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .unit {
      font-size: 1.8rem;
      color: #475569;
      margin-top: 5px;
      font-weight: 600;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }

    .info-card {
      background: rgba(37, 99, 235, 0.05);
      border-radius: 20px;
      padding: 25px;
      text-align: center;
      border: 1px solid #e5e7eb;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      background: rgba(37, 99, 235, 0.1);
      transform: translateY(-5px);
    }

    .info-label {
      color: #475569;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .info-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
    }

    .list-container {
      background: #ffffff;
      border-radius: 30px;
      padding: 35px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 15px 40px rgba(0,0,0,0.08);
    }

    .list-title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 30px;
      font-weight: 700;
      color: #1e293b;
    }

    .data-list {
      max-height: 500px;
      overflow-y: auto;
      padding-right: 10px;
    }

    .data-list::-webkit-scrollbar {
      width: 10px;
    }

    .data-list::-webkit-scrollbar-track {
      background: #f8fafc;
      border-radius: 10px;
    }

    .data-list::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #2563eb, #38bdf8);
      border-radius: 10px;
    }

    .data-item {
      background: rgba(37, 99, 235, 0.05);
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 15px;
      border-left: 5px solid #2563eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
      animation: slideIn 0.5s ease;
    }

    .data-item:hover {
      background: rgba(37, 99, 235, 0.1);
      transform: translateX(10px);
      border-left-color: #38bdf8;
    }

    .item-info {
      flex: 1;
    }

    .item-cluster {
      font-size: 0.95rem;
      color: #475569;
      margin-bottom: 5px;
    }

    .item-value {
      font-size: 2rem;
      font-weight: 700;
      color: #2563eb;
    }

    .loading {
      text-align: center;
      padding: 80px;
    }

    .spinner {
      width: 60px;
      height: 60px;
      border: 5px solid #e5e7eb;
      border-top-color: #2563eb;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 30px auto;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 30px;
    }

    .error {
      background: rgba(239, 68, 68, 0.1);
      border: 2px solid #ef4444;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #dc2626;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 768px) {
      h1 { font-size: 2rem; }
      .dashboard-grid { grid-template-columns: 1fr; }
      .btn-dashboard { grid-column: span 1; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>🌡️ IoT Dashboard</h1>
      <div class="subtitle">Real-time Temperature & Humidity Monitoring</div>
    </header>

    <div class="control-panel">
      <div class="button-grid">
        <button class="btn btn-dashboard" onclick="showDashboard()">
          📊 Full Dashboard
        </button>
        
        <button class="btn" onclick="callService('/firstTemperature', 'temperature')">
          🌡️ First Temperature
        </button>
        <button class="btn" onclick="callService('/lastTemperature', 'temperature')">
          🌡️ Last Temperature
        </button>
        <button class="btn" onclick="callService('/temperatureList', 'list')">
          📋 Temperature List
        </button>
        
        <button class="btn" onclick="callService('/firstHumidity', 'humidity')">
          💧 First Humidity
        </button>
        <button class="btn" onclick="callService('/lastHumidity', 'humidity')">
          💧 Last Humidity
        </button>
        <button class="btn" onclick="callService('/humidityList', 'list')">
          📋 Humidity List
        </button>
        
        <button class="btn btn-logout" onclick="callService('/logout', 'logout')">
          🚪 Logout
        </button>
      </div>
    </div>

    <div id="result"></div>
  </div>
  <script>
    function getTemperatureColor(temp) {
      if (temp <= 0) return '#00bfff';
      if (temp <= 15) return '#4ec5e8';
      if (temp <= 25) return '#66d9ff';
      if (temp <= 30) return '#ffd700';
      if (temp <= 35) return '#ff8c00';
      return '#ff4500';
    }

    function getHumidityColor(hum) {
      if (hum <= 30) return '#ff6b6b';
      if (hum <= 50) return '#ffd700';
      if (hum <= 70) return '#4ecdc4';
      return '#45b7d1';
    }

    function getTemperatureStatus(temp) {
      if (temp < 10) return '🥶 Very Cold';
      if (temp < 18) return '❄️ Cold';
      if (temp < 24) return '✅ Comfortable';
      if (temp < 28) return '☀️ Warm';
      if (temp < 35) return '🔥 Hot';
      return '🌡️ Very Hot';
    }

    function getHumidityStatus(hum) {
      if (hum < 30) return '🏜️ Very Dry';
      if (hum < 40) return '💨 Dry';
      if (hum < 60) return '✅ Comfortable';
      if (hum < 70) return '💧 Humid';
      return '💦 Very Humid';
    }

    function createGauge(data) {
      const isTemp = data.type === 'temperature';
      const value = isTemp ? data.temperature : data.humidity;
      const minVal = isTemp ? -10 : 0;
      const maxVal = isTemp ? 50 : 100;
      const unit = isTemp ? '°C' : '%';
      const icon = isTemp ? '🌡️' : '💧';
      
      const normalizedVal = Math.max(minVal, Math.min(maxVal, value));
      const percentage = ((normalizedVal - minVal) / (maxVal - minVal)) * 100;
      
      const circumference = 2 * Math.PI * 140;
      const offset = circumference - (percentage / 100) * circumference;
      const color = isTemp ? getTemperatureColor(value) : getHumidityColor(value);
      const status = isTemp ? getTemperatureStatus(value) : getHumidityStatus(value);

      return \`
        <div class="gauge-card">
          <div class="gauge-title">\${icon} \${data.title}</div>
          <div class="gauge-subtitle">Cluster: \${data.cluster} | Sensor: \${data.sensor}</div>
          
          <div class="gauge-wrapper">
            <svg class="gauge-svg" viewBox="0 0 320 320">
              <circle class="gauge-background" cx="160" cy="160" r="140"/>
              <circle class="gauge-progress" 
                      cx="160" cy="160" r="140"
                      stroke="\${color}"
                      stroke-dasharray="\${circumference}"
                      stroke-dashoffset="\${offset}"/>
            </svg>
            <div class="gauge-center">
              <div class="value-display">\${value.toFixed(1)}</div>
              <div class="unit">\${unit}</div>
            </div>
          </div>

          <div class="info-grid">
            <div class="info-card">
              <div class="info-label">Status</div>
              <div class="info-value">\${status}</div>
            </div>
            <div class="info-card">
              <div class="info-label">Range</div>
              <div class="info-value">\${minVal}\${unit} - \${maxVal}\${unit}</div>
            </div>
            <div class="info-card">
              <div class="info-label">Time</div>
              <div class="info-value">\${new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      \`;
    }

    function createList(data) {
      const isTemp = data.dataType === 'temperature';
      const items = isTemp ? data.temperatures : data.humidities;
      const title = isTemp ? '🌡️ Temperature List' : '💧 Humidity List';
      const unit = isTemp ? '°C' : '%';
      
      if (!items || items.length === 0) {
        return \`
          <div class="list-container">
            <div class="list-title">\${title}</div>
            <p style="text-align:center;">No data available</p>
          </div>
        \`;
      }

      const listItems = items.map((item, index) => {
        const value = isTemp ? item.temperature : item.humidity;
        return \`
          <div class="data-item" style="animation-delay: \${index * 0.05}s">
            <div class="item-info">
              <div class="item-cluster">
                #\${index + 1} - Cluster: \${item.cluster} | Sensor: \${item.sensor}
              </div>
            </div>
            <div class="item-value">\${value.toFixed(1)}\${unit}</div>
          </div>
        \`;
      }).join('');

      return \`
        <div class="list-container">
          <div class="list-title">\${title}</div>
          <div class="data-list">
            \${listItems}
          </div>
        </div>
      \`;
    }

    function createDashboard(data) {
      const lastTemp = data.temperatures[data.temperatures.length - 1];
      const lastHum = data.humidities[data.humidities.length - 1];
      
      const tempGauge = createGauge({
        type: 'temperature',
        temperature: lastTemp.value,
        cluster: lastTemp.cluster,
        sensor: lastTemp.sensor,
        title: 'Current Temperature'
      });
      
      const humGauge = createGauge({
        type: 'humidity',
        humidity: lastHum.value,
        cluster: lastHum.cluster,
        sensor: lastHum.sensor,
        title: 'Current Humidity'
      });

      return \`
        <div class="dashboard-grid">
          \${tempGauge}
          \${humGauge}
        </div>
      \`;
    }

    async function callService(url, type) {
      const resultDiv = document.getElementById('result');
      resultDiv.classList.remove('show');
      
      if (type === 'logout') {
        window.location.href = url;
        return;
      }

      setTimeout(() => {
        resultDiv.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading data...</p></div>';
        resultDiv.classList.add('show');
      }, 100);

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        setTimeout(() => {
          if (data.type === 'temperature' || data.type === 'humidity') {
            resultDiv.innerHTML = createGauge(data);
          } else if (data.type === 'list') {
            resultDiv.innerHTML = createList(data);
          } else if (data.type === 'dashboard') {
            resultDiv.innerHTML = createDashboard(data);
          } else if (data.type === 'error') {
            resultDiv.innerHTML = \`
              <div class="error">
                <h3>❌ Error</h3>
                <p>\${data.message}</p>
              </div>
            \`;
          } else {
            resultDiv.innerHTML = \`
              <div class="gauge-card">
                <div class="gauge-title">ℹ️ Information</div>
                <p style="text-align:center; margin-top:20px;">\${data.message || 'Operation completed'}</p>
              </div>
            \`;
          }
        }, 600);

      } catch (err) {
        setTimeout(() => {
          resultDiv.innerHTML = \`
            <div class="error">
              <h3>❌ Connection Error</h3>
              <p>Unable to fetch data from server</p>
            </div>
          \`;
          console.error(err);
        }, 600);
      }
    }

    async function showDashboard() {
      await callService('/dashboard', 'dashboard');
    }
  </script>
</body>
</html>
  `;
}

module.exports = {
  renderHomePage,
  renderAboutPage,
  renderRegistrationPage,
  renderAuthenticationPage,
  renderMainPage,
  renderAddSensorPage,
  renderHtmlResult
};