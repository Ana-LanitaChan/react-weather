import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDays from "./ForecastDays";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [renderfore, setRenderfore] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.latcode, props.loncode]);

  function handleResponse(response) {
    console.log(response.data.daily);
    setRenderfore(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast row mt-3 justify-content-center">
        {renderfore.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col text-center" key={index}>
                <ForecastDays data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = `492c6e2ddde5d9a8edcbcb2a6951f7b7`;
    let units = `metric`;
    let latitude = props.latcode;
    let longitude = props.loncode;
    let apiCallForecast = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    axios.get(apiCallForecast).then(handleResponse);

    return null;
  }
}
