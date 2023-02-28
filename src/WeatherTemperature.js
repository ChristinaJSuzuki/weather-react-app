import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="units" style={{ fontSize: "18pt" }}>
          <a href="_blank" id="celsius-link" className="text-decoration-none">
            °C{" "}
          </a>
          |
          <a
            href="_blank"
            id="fahrenheit-link"
            className="text-decoration-none"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature" id="temperature">
          {Math.round(fahrenheit)}
        </span>
        <span className="units" style={{ fontSize: "18pt" }}>
          <a
            href="_blank"
            id="celsius-link"
            className="text-decoration-none"
            onClick={showCelsius}
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
    );
  }
}
