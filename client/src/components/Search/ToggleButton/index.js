import React, { useState } from "react";
import SearchBox from "../SearchBox";
import ListItem from "../ListItem";
function ToggleButton({ productList, getData }) {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle} className="idPassCard">
        {isToggled
          ? "Show All Claims"
          : "Search Claims DataBase by Lemonsoft ID"}
      </button>

      {!isToggled ? (
        <ListItem productList={productList} getData={getData} />
      ) : (
        <SearchBox />
      )}
    </div>
  );
}

export default ToggleButton;
