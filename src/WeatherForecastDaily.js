import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDaily.css";
export default function WeatherForecastDaily() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <WeatherIcon code="01d" />
          </div>
          <div className="forecast-units">
            <span>19°</span> | <span>10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
