import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="parent">
        <div className="card" style={{ width: "50rem" }}>
          <form className="search-form" id="search-form">
            <div
              className="box"
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
                autoFocus="on"
                autoComplete="off"
                id="city-input"
              />
              <input type="submit" value="Go" />
            </div>
          </form>
          <div
            className="card-body"
            style={{ width: "797px", height: "526px" }}
          >
            <div className="london">
              <h1 className="card-title" id="city">
                London, England
              </h1>
            </div>
            <h1 className="card-text">
              <div className="current-time">
                <p>
                  Last updated: <span id="date"></span>
                </p>
              </div>
              <div className="col-6">
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
              <div className="ninedegrees">
                <span className="temperature" id="temperature">
                  9
                </span>
                <span className="units" style={{ fontSize: "18pt" }}>
                  <a
                    href="_blank"
                    id="celsius-link"
                    className="text-decoration-none"
                  >
                    °C{" "}
                  </a>
                  |
                  <a
                    href="_blank"
                    id="fahrenheit-link"
                    className="text-decoration-none"
                  >
                    °F
                  </a>
                </span>
              </div>
              <div className="littlestars">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Clear"
                  id="icon"
                  className="float-left"
                />
              </div>
            </h1>
            <div className="card-group" id="forecast">
              <div
                className="card-0"
                style={{ width: "9.5rem", height: "7.3rem" }}
              >
                <div className="card-body-mon">
                  <h5 className="card-title-mon">MON</h5>
                  <img
                    src="http://openweathermap.org/img/wn/50d@2x.png"
                    alt=""
                    width="36"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="card-text-degree-max"> 17° </span>
                    <span className="card-text-degree-min"> 12° </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
