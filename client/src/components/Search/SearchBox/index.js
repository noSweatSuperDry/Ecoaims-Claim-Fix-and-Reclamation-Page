import React, { useState } from "react";
import Axios from "axios";
import ListItem from "../ListItem";

function SearchBox() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.get(`http://localhost:5001/claims/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setProduct(null);
        setError(error.response.data);
      });
    console.log(error);
  };

  return (
    <div>
      <h1 className="searchbox">Search</h1>
      <form onSubmit={handleSubmit}>
        <label className="searchbox">Please insert Lemonsoft ID: </label>
        <br />
        <input
          autoFocus
          type="text"
          className="searchbox"
          value={id}
          onChange={handleInputChange}
        ></input>
        <br />
        <button className="idPassCard">Search</button>
      </form>
      {product ? <ListItem productList={product} /> : <p>No Data</p>}
    </div>
  );
}

export default SearchBox;
