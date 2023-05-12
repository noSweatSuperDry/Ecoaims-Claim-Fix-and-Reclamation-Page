import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./index.css";

import ToggleButton from "./ToggleButton";

function Search() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await Axios.get(
      `https://${process.env.REACT_APP_SERVER_URL}/reclamation/all`
    )
      .then((response) => {
        setProductList(response.data);
      })
      .catch((res) => alert(res));
  }

  return (
    <div className="pageOutlet" style={{ height: "fit-content" }}>
      <ToggleButton productList={productList} getData={getData} />
    </div>
  );
}

export default Search;
