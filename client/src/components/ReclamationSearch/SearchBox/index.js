import React, { useState } from "react";
import Axios from "axios";
import "./index.css";
import ListItem from "../ListItem";

function SearchBox() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);
  console.log(product);
  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.get(`http://ecoaims-crud-server.onrender.com/reclamation/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log("Search by LemonSoft ID Successful");
      })
      .catch(() => {
        setProduct(null);
      });
  };

  return (
    <div>
      <h1 className="searchbox">Search Reclamation:</h1>
      <form onSubmit={handleSubmit}>
        <label className="searchbox">Please insert Lemonsoft Serial No: </label>
        <br />
        <input
          autoFocus
          type="number"
          className="searchbox"
          placeholder="LemonSoft Serial Number"
          value={id}
          onChange={handleInputChange}
        ></input>
        <br />
        <button className="idPassCard">Search</button>
      </form>
      {product ? (
        <ListItem productList={product} />
      ) : (
        <p>
          Write LemonSoft Serial Number in search box or Press "Show All
          Reclamations".
        </p>
      )}
    </div>
  );
}

export default SearchBox;
