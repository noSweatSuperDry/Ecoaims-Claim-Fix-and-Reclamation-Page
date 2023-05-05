import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./index.css";

import ToggleButton from "./ToggleButton";

function Search() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5001/reclamation/all")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((res) => alert(res));
  }, []);

  return (
    <div className="pageOutlet" style={{ height: "fit-content" }}>
      <ToggleButton productList={productList} />
    </div>
  );
}

export default Search;
