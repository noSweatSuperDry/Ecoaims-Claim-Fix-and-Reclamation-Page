import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./index.css";

import ToggleButton from "./ToggleButton";

function Search() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/READ").then((response) => {
      setProductList(response.data);
    });
  }, []);

  return (
    <div className="pageOutlet" style={{ height: "fit-content" }}>
      <ToggleButton productList={productList} />
    </div>
  );
}

export default Search;
