import React, { useState } from "react";
import EditCard from "../EditCard";

function EditButton({ productList }) {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle} className="idPassCard">
        {isToggled ? "Cancel Editing" : "Edit Product DataBase"}
      </button>
      {!isToggled && <EditCard productList={productList} />}
    </div>
  );
}

export default EditButton;
