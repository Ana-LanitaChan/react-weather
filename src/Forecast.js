import React from "react";
import "./Forecast.css";
import Icon from "./Icon";

export default function Forecast() {
  return (
    <div className="Forecast row justify-content-center">
      <div className="col-2 text-center">
        <em>Fore 01</em>{" "}
        <div>
          <Icon code="01d" size={36} />
        </div>
        <small>
          <strong>00ºC</strong> | 00ºC
        </small>
      </div>
    </div>
  );
}
