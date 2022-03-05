import React, { useState } from "react";
import "./Weatherunits.css";

export default function Weatherunits(props) {
  let [units, setUnits] = useState("celsius");

  function renderFarenheit(event) {
    event.preventDefault();
    setUnits("farenheit");
  }

  function renderCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {
    return (
      <div>
        <h3>
          {Math.round(props.temp)} <span>ºC</span> |{" "}
          <a href="/" onClick={renderFarenheit}>
            ºF
          </a>
        </h3>
      </div>
    );
  } else {
    let farens = (props.temp * 9) / 5 + 32;

    return (
      <h3>
        {Math.round(farens)} <span>ºF</span> |
        <a href="/" onClick={renderCelsius}>
          ºC
        </a>{" "}
      </h3>
    );
  }
}
