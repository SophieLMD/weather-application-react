import React from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "866a208a73eeff02182218e9441647a1";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-entry"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 shadow-sm"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <div className="row mt-3 mb-4">
        <div className="col-4">
          <div className="clearfix d-flex justify-content start">
            <div className="float-left">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
              />
            </div>
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>
              Precipitation:<strong>2%</strong>
            </li>
            <li>
              Humidity:<strong>83%</strong>
            </li>
            <li>
              Wind:<strong>7mph</strong>
            </li>
          </ul>
        </div>
        <div className="col-4 position-relative">
          <div className="position-absolute top-0 start-50 text-end">
            <h2>Weather</h2>
            <ul>
              <li>Tuesday 05:00</li>
              <li>Mostly Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
