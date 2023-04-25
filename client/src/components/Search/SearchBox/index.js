import React, { useState } from 'react'


function SearchBox() {
    

  return (
    <div><h2>Search</h2>
    <label>Please insert Lemonsoft ID or Serial Number to search a package: </label>
    <input autoFocus type="text/Number"></input>
    <br />
    <button className="idPassCard">Search</button>
   
    </div>
  )
}

export default SearchBox