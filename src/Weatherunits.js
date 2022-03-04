import React from "react";
import "./Weatherunits.css";

export default function Weatherunits(props) {
  return (
    <div>
      <h3>
        {Math.round(props.temp)} <span>ºC</span>
      </h3>
    </div>
  );
}
