import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form action="search" className="mb-3" id="form">
        <div className="input-group">
          <input
            className="form-control border border-dark"
            type="search"
            placeholder="Search for a city"
            id="input-search"
          />
          <input
            className="btn btn-dark submit-style"
            type="submit"
            value="Search"
            id="submit"
          />
        </div>
      </form>
    </div>
  );
}
