import React, { useState } from "react";
import "./index.css";
function SearchBox() {
  return (
    <div>
      <h2 className="searchbox">Search</h2>
      <label className="searchbox">Please insert Lemonsoft ID: </label>
      <br />
      <input autoFocus type="text/Number" className="searchbox"></input>
      <br />

      <button className="idPassCard">Search</button>
    </div>
  );
}

export default SearchBox;
