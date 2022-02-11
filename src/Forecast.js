import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast row justify-content-center">
      <div className="col-2 text-center">
        <em>Fore 01</em>{" "}
        <div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={32}
            animate={true}
          />
        </div>
        <small>00ºC | 00ºC</small>
      </div>
      <div className="col-2 text-center">
        <em>Fore 02</em>{" "}
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="gray"
            size={32}
            animate={true}
          />
        </div>{" "}
        <small>00ºC | 00ºC</small>
      </div>
      <div className="col-2 text-center">
        <em>Fore 03</em>{" "}
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="gray"
            size={32}
            animate={true}
          />
        </div>{" "}
        <small>00ºC | 00ºC</small>
      </div>
      <div className="col-2 text-center">
        <em>Fore 04</em>
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="gray"
            size={32}
            animate={true}
          />
        </div>{" "}
        <small>00ºC | 00ºC</small>
      </div>
      <div className="col-2 text-center">
        <em>Fore 05</em>
        <div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={32}
            animate={true}
          />
        </div>{" "}
        <small>00ºC | 00ºC</small>
      </div>
    </div>
  );
}
