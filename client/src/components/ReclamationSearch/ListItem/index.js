import React, { useState } from "react";
import "../index.css";
import Axios from "axios";

function ListItem({ productList }) {
  const [isToggled, setIsToggled] = useState(true);
  const [productUpdated, setProductUpdated] = useState({});

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };
  const handleUpdateProduct = async (id) => {
    await Axios.put(`http://localhost:5001/reclamation/update/${id}`, {
      productUpdated,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error updating :" + error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductUpdated((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
    }));
  };

  //Delete Handler Function
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:5001/reclamation/${id}`)
      .then((response) => {
        console.log(response.data);
        // Do something after successful deletion, such as updating state or displaying a message to the user
        alert("Product Listing Deleted!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        // Handle error, such as displaying an error message to the user
      });
  };

  return (
    <div className="fullPage">
      <h1>List of Claimed/Fixed/Internal Reclaimed Products</h1>
      {productList.map((val, key) => {
        return (
          <div key={key} className="productCard">
            <p className="title">Issue Date: </p>
            {isToggled ? (
              <p className="data">{val.issueDate} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.issueDate}
                type="date"
                name="issueDate"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Product/Part Name: </p>
            {isToggled ? (
              <p className="data">{val.partName} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.partName}
                type="text"
                name="partName"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Device Serial Number: </p>
            {isToggled ? (
              <p className="data"> {val.deviceSerialNumber} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.deviceSerialNumber}
                type="text"
                name="deviceSerialNumber"
                onChange={handleInputChange}
              />
            )}
            <p className="title"> How many ? </p>
            {isToggled ? (
              <p className="data">{val.howMany} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.howMany}
                type="text"
                name="howMany"
                onChange={handleInputChange}
              />
            )}
            <p className="title">LemonSoft Issue Number: </p>
            {isToggled ? (
              <p className="data">{val.lemonSoftIssueNumber} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.lemonSoftIssueNumber}
                type="text"
                name="lemonSoftIssueNumber"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Electrical component type ? </p>
            {isToggled ? (
              <p className="data">{val.electricalComponentType} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.electricalComponentType}
                type="text"
                name="electricalComponentType"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Mechanical component type ? </p>
            {isToggled ? (
              <p className="data">{val.mechanicalComponentType} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.mechanicalComponentType}
                type="text"
                name="mechanicalComponentType"
                onChange={handleInputChange}
              />
            )}
            <p className="title"> Information: </p>
            {isToggled ? (
              <p className="data">{val.information} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.information}
                type="text"
                name="information"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Cause is known ? </p>
            {isToggled ? (
              <p className="data">{val.causeKnownR} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.causeKnownR}
                type="text"
                name="causeKnownR"
                onChange={handleInputChange}
              />
            )}
            <p className="title">What is the cause ? </p>
            {isToggled ? (
              <p className="data">{val.whatIsTheCauseR} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.whatIsTheCauseR}
                type="text"
                name="whatIsTheCauseR"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Conclusion ? </p>
            {isToggled ? (
              <p className="data">{val.conclusionR} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.conclusionR}
                type="text"
                name="conclusionR"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Repaired/Changed components:</p>
            {isToggled ? (
              <p className="data">{val.repairedChangedComponent} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.repairedChangedComponent}
                type="text"
                name="repairedChangedComponent"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Please Write your Name: </p>
            {isToggled ? (
              <p className="data">{val.userNameR} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.userNameR}
                type="text"
                name="userNameR"
                onChange={handleInputChange}
              />
            )}

            <button onClick={handleToggle} className="idPassCard">
              {!isToggled ? "Cancel Edit" : "Edit"}
            </button>
            {!isToggled && (
              <button
                className="idPassCard"
                onClick={() => {
                  handleUpdateProduct(val._id);
                }}
              >
                Save Changes
              </button>
            )}
            {isToggled && (
              <button
                onClick={() => handleDelete(val._id)}
                className="idPassCard"
              >
                Delete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ListItem;
