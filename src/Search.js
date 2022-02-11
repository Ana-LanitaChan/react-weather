import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [cityvalue, setCityvalue] = useState("");
  let [display, setCitydisplay] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCityvalue(event.target.value);
  }

  return (
    <div className="Search">
      <form action="search" class="mb-3" id="form" onSubmit={handleSubmit}>
        <div class="input-group">
          <input
            class="form-control border border-dark"
            type="search"
            placeholder="Search for a city"
            id="input-search"
            onChange={updateCity}
          />
          <input
            class="btn btn-dark submit-style"
            type="submit"
            value="Search"
            id="submit"
          />
        </div>
      </form>
    </div>
  );
}
