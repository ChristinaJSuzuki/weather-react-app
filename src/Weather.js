import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
                  placeholder="Enter a city.."
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
                  {weatherData.city}
                </h1>
              </div>
              <h1 className="card-text">
                <div className="current-time">
                  <p>
                    Last updated:{" "}
                    <span id="date">
                      <FormattedDate date={weatherData.date} />
                    </span>
                  </p>
                </div>
                <div className="col-6">
                  <ul>
                    <li id="description" className="text-capitalize">
                      {weatherData.description}
                    </li>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{weatherData.wind}</span>km/h
                    </li>
                  </ul>
                </div>
                <div className="ninedegrees">
                  <span className="temperature" id="temperature">
                    {Math.round(weatherData.temperature)}
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
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
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
  } else {
    const apiKey = "f22601490e7eb477d1086fcdeacccf93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
