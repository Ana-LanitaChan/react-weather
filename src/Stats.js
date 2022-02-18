import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Stats.css";

export default function Stats(props) {
  const [load, setLoad] = useState(false);
  const [renderstat, setRenderstat] = useState({});

  function handleDefault(response) {
    console.log(response.data);
    setRenderstat({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
    setLoad(true);
  }

  if (load) {
    return (
      <div className="row justify-content-end align-baseline Stats">
        <div className="col-md-2 mb-3">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={72}
            animate={true}
          />
        </div>
        <div className="col-md-6">
          <h3>{Math.round(renderstat.temperature)}ºC</h3>
          <h2>{props.defaultcity}</h2>
        </div>
        <div className="col-md-4">
          <div>Description: {renderstat.description}</div>
          <div>Precipitation: 00mm</div>
          <div>Humidity: {renderstat.humidity}</div>
          <div>Wind:{Math.round(renderstat.wind)} km/h</div>
          <div>Last update 00:00 hrs.</div>
        </div>
      </div>
    );
  } else {
    let apiKey = `492c6e2ddde5d9a8edcbcb2a6951f7b7`;
    let units = `metric`;
    let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=${units}`;
    axios.get(apiCall).then(handleDefault);

    return <h3>Loading...</h3>;
  }
}
