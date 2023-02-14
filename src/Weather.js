import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
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

  function search() {
    const apiKey = "f22601490e7eb477d1086fcdeacccf93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="parent">
          <div className="card" style={{ width: "50rem" }}>
            <form
              className="search-form"
              id="search-form"
              onSubmit={handleSubmit}
            >
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
                  onChange={handleCityChange}
                />
                <input type="submit" value="Go" />
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
