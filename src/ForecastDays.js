import React from "react";
import Icon from "./Icon";

export default function ForecastDays(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
    let millisecs = new Date(props.data.dt * 1000);
    let day = days[millisecs.getDay()];

    return day;
  }

  return (
    <div className="col text-center">
      <em>{day()}</em>{" "}
      <div>
        <Icon code={props.data.weather[0].icon} size={36} />
      </div>
      <small>
        <strong>{maxTemp()}</strong> | {minTemp()}
      </small>
    </div>
  );
}
