import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherInfo">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-entry"
        />
        <input type="submit" value="Search" className="btn-primary" />
      </form>
      <h1>New York</h1>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="Mostly Cloudy"
      />
      6°
      <ul>
        <li>Precipitation:2%</li>
        <li>Humidity:83%</li>
        <li>Wind:7mph</li>
      </ul>
      <h2>Weather</h2>
      <ul>
        <li>Tuesday 05:00</li>
        <li>Mostly Cloudy</li>
      </ul>
    </div>
  );
}
