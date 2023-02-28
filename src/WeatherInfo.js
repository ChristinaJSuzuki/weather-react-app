import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card-body" style={{ width: "797px", height: "526px" }}>
        <div className="london">
          <h1 className="card-title" id="city">
            {props.data.city}
          </h1>
        </div>
        <h1 className="card-text">
          <div className="current-time">
            <p>
              Last updated:{" "}
              <span id="date">
                <FormattedDate date={props.data.date} />
              </span>
            </p>
          </div>
          <div className="col-6">
            <ul>
              <li id="description" className="text-capitalize">
                {props.data.description}
              </li>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}</span>km/h
              </li>
            </ul>
          </div>
          <div className="ninedegrees">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="littlestars">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
          </div>
        </h1>
        <div className="card-group" id="forecast">
          <div className="card-0" style={{ width: "9.5rem", height: "7.3rem" }}>
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
  );
}
