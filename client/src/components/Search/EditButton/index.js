import React, { useState } from "react";


function EditButton() {
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
      
    </div>
  );
}

export default EditButton;
