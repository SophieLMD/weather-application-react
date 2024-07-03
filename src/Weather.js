import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
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
        <h1>{props.defaultCity}</h1>
        <div className="row mt-3 mb-4">
          <div className="col-4">
            <div className="clearfix d-flex justify-content start">
              <div className="float-left">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
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
                Wind:<strong>{weatherData.wind}km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-4 position-relative">
            <div className="position-absolute top-0 start-50 text-end">
              <h2>Weather</h2>
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "866a208a73eeff02182218e9441647a1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
