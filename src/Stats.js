import React, { useState } from "react";
import axios from "axios";
import "./Stats.css";
import Icon from "./Icon";
import Formatdate from "./Formatdate";
import Weatherunits from "./Weatherunits";
import Forecast from "./Forecast";

export default function Stats(props) {
  const [load, setLoad] = useState(false);
  const [renderstat, setRenderstat] = useState({});
  const [inputcity, setInputcity] = useState(props.defaultcity);

  function handleDefault(response) {
    console.log(response.data);
    setRenderstat({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      dateupdate: response.data.dt,
    });
    setLoad(true);
  }

  function apiUrl() {
    let apiKey = `492c6e2ddde5d9a8edcbcb2a6951f7b7`;
    let units = `metric`;
    let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&appid=${apiKey}&units=${units}`;
    axios.get(apiCall).then(handleDefault);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiUrl();
  }

  function handleInput(event) {
    setInputcity(event.target.value);
  }

  if (load) {
    return (
      <div className="Stats">
        <div className="row justify-content-end align-baseline">
          <div className="col-md-2 mb-3">
            <Icon code={renderstat.icon} size={72} />
          </div>
          <div className="col-md-6">
            <Weatherunits temp={renderstat.temperature} />
            <h2>{renderstat.city}</h2>
          </div>
          <div className="col-md-4">
            <div>Description: {renderstat.description}</div>
            <div>Precipitation: 00mm</div>
            <div>Humidity: {renderstat.humidity}%</div>
            <div>Wind: {Math.round(renderstat.wind)}km/h</div>
          </div>
        </div>
        <div className="row">
          <form
            action="search"
            className="mt-3 mb-2"
            id="form"
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <input
                className="form-control border border-dark"
                type="search"
                placeholder="Search for a city"
                onChange={handleInput}
              />
              <input
                className="btn btn-dark submit-style"
                type="submit"
                value="Search"
                id="submit"
              />
            </div>
          </form>
          <Formatdate timestamp={renderstat.dateupdate} />
        </div>
        <Forecast />
      </div>
    );
  } else {
    apiUrl();
    return <h3>Loading...</h3>;
  }
}
