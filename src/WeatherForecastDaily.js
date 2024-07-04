import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDaily.css";
import axios from "axios";
export default function WeatherForecastDaily() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "866a208a73eeff02182218e9441647a1";
  let lon = 55.4;
  let lat = 3.4;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <WeatherIcon code="01d" size={40} />
          </div>
          <div className="forecast-units">
            <span className="high">19°</span>
            <span className="low">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
