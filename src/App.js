import "./App.css";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="vanilla-weather-app-wrapper">
          <div class="container">
            <div class="parent">
              <div class="card" style={{ width: "50rem" }}>
                <form class="search-form" id="search-form">
                  <div
                    class="box"
                    id="search-form"
                    style={{
                      eight: "30px",
                      width: "235px",
                      margin: "10px 230px 0px",
                    }}
                  >
                    <input
                      type="search"
                      placeholder="Enter Location"
                      autofocus="on"
                      autocomplete="off"
                      id="city-input"
                    />
                    <input type="submit" value="Go" />
                  </div>
                </form>
                <div
                  class="card-body"
                  style={{ width: "797px", height: "526px" }}
                >
                  <div class="london">
                    <h1 class="card-title" id="city">
                      London, England
                    </h1>
                  </div>
                  <h1 class="card-text">
                    <div class="current-time">
                      <p>
                        Last updated: <span id="date"></span>
                      </p>
                    </div>
                    <div class="col-6">
                      <ul>
                        <li id="description"></li>
                        <li>
                          Humidity: <span id="humidity"></span>%
                        </li>
                        <li>
                          Wind: <span id="wind"></span>km/h
                        </li>
                      </ul>
                    </div>
                    <div class="ninedegrees">
                      <span class="temperature" id="temperature">
                        9
                      </span>
                      <span class="units" style={{ fontSize: "18pt" }}>
                        <a href="#" id="celsius-link">
                          °C{" "}
                        </a>
                        |
                        <a href="#" id="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </div>
                    <div class="littlestars">
                      <img
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                        alt="Clear"
                        id="icon"
                        class="float-left"
                      />
                    </div>
                  </h1>
                  <div class="card-group" id="forecast">
                    <div
                      class="card-0"
                      style={{ width: "9.5rem", height: "7.3rem" }}
                    >
                      <div class="card-body-mon">
                        <h5 class="card-title-mon">MON</h5>
                        <img
                          src="http://openweathermap.org/img/wn/50d@2x.png"
                          alt=""
                          width="36"
                        />
                        <div class="weather-forecast-temperatures">
                          <span class="card-text-degree-max"> 17° </span>
                          <span class="card-text-degree-min"> 12° </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="github-link">
            <a
              href="https://github.com/ChristinaJSuzuki/weather-react-app.git"
              target="_blank"
            >
              Open-source code
            </a>
            by Christina J Suzuki
          </span>
        </div>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
