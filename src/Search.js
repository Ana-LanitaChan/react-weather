import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form action="search" class="mb-3" id="form">
        <div class="input-group">
          <input
            class="form-control border border-dark"
            type="search"
            placeholder="Search for a city"
            id="input-search"
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
