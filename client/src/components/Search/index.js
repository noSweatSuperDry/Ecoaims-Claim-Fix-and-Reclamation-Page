import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./index.css";

import ToggleButton from "./ToggleButton";

function Search() {
  const [productList, setProductList] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/READ").then((response) => {
      setProductList(response.data);
    });
  }, []);

  const updateProductName = (id) => {
    Axios.put("http://localhost:3001/UPDATE", {
      id: id,
      productName: newProductName,
    });
  };

  return (
    <div className="pageOutlet" style={{ height: "fit-content" }}>
      <ToggleButton productList={productList} />
    </div>
  );
}

export default Search;
