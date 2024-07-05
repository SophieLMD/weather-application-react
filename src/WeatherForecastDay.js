import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function highTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function lowTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="forecast-units">
        <span className="high">{highTemperature()}</span>
        <span className="low">{lowTemperature()}</span>
      </div>
    </div>
  );
}
