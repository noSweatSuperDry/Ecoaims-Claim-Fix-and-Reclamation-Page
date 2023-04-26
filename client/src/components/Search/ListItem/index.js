import React, { useState } from "react";
import "../index.css";
import Axios from "axios";

function ListItem({ productList }) {
  const [isToggled, setIsToggled] = useState(true);
  const [productUpdated, setProductUpdated] = useState({});
  const [productId, setProductId] = useState(null); // new state variable

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };
  const updateProductName = () => {
    Axios.put("http://localhost:3001/UPDATE", {
      id: productId, // use the productId state variable here
      productUpdate: productUpdated,
    })
      .then(() => {
        console.log("Product name updated successfully with" + productUpdated);
      })
      .catch((error) => {
        console.error("Error updating product name:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductUpdated((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
    }));
  };

  // update the productId state variable when the button is clicked
  const handleUpdateClick = (id) => {
    setProductId(id);
    updateProductName();
  };
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3001/products/${id}`)
      .then((response) => {
        console.log(response.data);
        // Do something after successful deletion, such as updating state or displaying a message to the user
        alert("Data Delted");
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
            <p className="title">Product Name: </p>
            {isToggled ? (
              <p className="data">{val.productName} </p>
            ) : (
              <input
                className="data"
                placeholder={val.productName}
                type="text"
                name="productName"
                value={val.productName}
                onChange={handleInputChange}
              />
            )}
            <p className="title">Product Serial No: </p>
            {isToggled ? (
              <p className="data">{val.productSerialNumber} </p>
            ) : (
              <input
                className="data"
                placeholder={val.productSerialNumber}
                value={val.productSerialNumber}
                type="text"
                name="productSerialNumber"
                onChange={handleInputChange}
              />
            )}

            <p className="title">Issue Date: </p>
            {isToggled ? (
              <p className="data"> {val.issueDate} </p>
            ) : (
              <input
                className="data"
                placeholder={val.issueDate}
                value={val.issueDate}
                type="Date"
                name="issueDate"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Repair Date: </p>
            {isToggled ? (
              <p className="data">{val.repairDate} </p>
            ) : (
              <input
                className="data"
                placeholder={val.repairDate}
                value={val.repairDate}
                type="Date"
                name="repairDate"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Manufacturing Date:</p>
            {isToggled ? (
              <p className="data">{val.manufacturingDate} </p>
            ) : (
              <input
                className="data"
                placeholder={val.manufacturingDate}
                value={val.manufacturingDate}
                type="Date"
                name="manufacturingDate"
                onChange={handleInputChange}
              />
            )}
            <p className="title">PCB Model: </p>
            {isToggled ? (
              <p className="data">{val.pcbModelNo} </p>
            ) : (
              <input
                className="data"
                placeholder={val.pcbModelNo}
                value={val.pcbModelNo}
                type="text"
                name="pcbModelNo"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Laser S/N: </p>
            {isToggled ? (
              <p className="data">{val.laserSerialNumber} </p>
            ) : (
              <input
                className="data"
                placeholder={val.laserSerialNumber}
                value={val.laserSerialNumber}
                type="text"
                name="laserSerialNumber"
                onChange={handleInputChange}
              />
            )}
            <p className="title">LemonSoft S/N: </p>
            {isToggled ? (
              <p className="data">{val.lemonSoftIssueNumber} </p>
            ) : (
              <input
                className="data"
                placeholder={val.lemonSoftIssueNumber}
                value={val.lemonSoftIssueNumber}
                type="text"
                name="lemonSoftIssueNumber"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Country: </p>
            {isToggled ? (
              <p className="data">{val.country} </p>
            ) : (
              <input
                className="data"
                placeholder={val.country}
                value={val.country}
                type="text"
                name="country"
                onChange={handleInputChange}
              />
            )}

            <p className="title">Report by Customer: </p>
            {isToggled ? (
              <p className="data">{val.productSerialNumber} </p>
            ) : (
              <input
                className="data"
                placeholder={val.reportByCustomer}
                value={val.reportByCustomer}
                type="text"
                name="reportByCustomer"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Report by Ecoaims: </p>
            {isToggled ? (
              <p className="data">{val.reportByEcoaims} </p>
            ) : (
              <input
                className="data"
                placeholder={val.reportByEcoaims}
                value={val.reportByEcoaims}
                type="text"
                name="reportByEcoaims"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Cause is known ?(Y/N)</p>
            {isToggled ? (
              <p className="data">{val.causeKnown} </p>
            ) : (
              <input
                className="data"
                placeholder={val.causeKnown}
                value={val.causeKnown}
                type="text"
                name="causeKnown"
                onChange={handleInputChange}
              />
            )}
            <p className="title">What is the cause ?</p>
            {isToggled ? (
              <p className="data">{val.whatIsTheCause} </p>
            ) : (
              <input
                className="data"
                placeholder={val.whatIsTheCause}
                value={val.whatIsTheCause}
                type="text"
                name="whatIsTheCause"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Conclusion: </p>
            {isToggled ? (
              <p className="data">{val.Conclusion} </p>
            ) : (
              <input
                className="data"
                placeholder={val.Conclusion}
                value={val.Conclusion}
                type="text"
                name="Conclusion"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Message To Customer: </p>
            {isToggled ? (
              <p className="data">{val.whatMsgToCustomer} </p>
            ) : (
              <input
                className="data"
                placeholder={val.whatMsgToCustomer}
                value={val.whatMsgToCustomer}
                type="text"
                name="whatMsgToCustomer"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Components Used In Repair: </p>
            {isToggled ? (
              <p className="data">{val.componentsUsedInRepair} </p>
            ) : (
              <input
                className="data"
                placeholder={val.componentsUsedInRepair}
                value={val.componentsUsedInRepair}
                type="text"
                name="componentsUsedInRepair"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Repairer Name: </p>
            {isToggled ? (
              <p className="data">{val.userName} </p>
            ) : (
              <input
                className="data"
                placeholder={val.userName}
                value={val.userName}
                type="text"
                name="userName"
                onChange={handleInputChange}
              />
            )}
            <button onClick={handleToggle} className="idPassCard">
              {!isToggled ? "Cancel Editing" : "Edit"}
            </button>
            <button className="idPassCard" onClick={handleUpdateClick}>
              Update
            </button>
            <button
              onClick={() => handleDelete(val._id)}
              className="idPassCard"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListItem;
