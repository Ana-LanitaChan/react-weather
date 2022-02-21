import React from "react";

export default function Formatdate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let millisecs = new Date(props.timestamp * 1000);
  let day = days[millisecs.getDay()];
  let hours = millisecs.getHours();
  let minutes = millisecs.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  } else {
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else {
  }

  return (
    <div>
      Last update: {day}, {hours}:{minutes} hrs.
    </div>
  );
}
