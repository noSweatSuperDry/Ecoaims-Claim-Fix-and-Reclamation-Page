import React, { useState } from "react";
import "../index.css";
import Axios from "axios";

function ListItem({ productList }) {
  const [isToggled, setIsToggled] = useState(true);
  const [productUpdated, setProductUpdated] = useState({});
  console.log(productList);
  console.log(productUpdated);
  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };
  const handleUpdateProduct = async (id) => {
    await Axios.put(`http://localhost:5001/claims/update/${id}`, {
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
    Axios.delete(`http://localhost:5001/claims/${id}`)
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
            <p className="title">Product Name: </p>
            {isToggled ? (
              <p className="data">{val.productName} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.productName}
                type="text"
                name="productName"
                onChange={handleInputChange}
              />
            )}
            <p className="title">Product Serial No: </p>
            {isToggled ? (
              <p className="data">{val.productSerialNumber} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.productSerialNumber}
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
                defaultValue={val.issueDate}
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
                defaultValue={val.repairDate}
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
                defaultValue={val.manufacturingDate}
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
                defaultValue={val.pcbModelNo}
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
                defaultValue={val.laserSerialNumber}
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
                defaultValue={val.lemonSoftIssueNumber}
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
                defaultValue={val.country}
                type="text"
                name="country"
                onChange={handleInputChange}
              />
            )}

            <p className="title">Report by Customer: </p>
            {isToggled ? (
              <p className="data">{val.reportByCustomer} </p>
            ) : (
              <input
                className="data"
                defaultValue={val.reportByCustomer}
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
                defaultValue={val.reportByEcoaims}
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
                defaultValue={val.causeKnown}
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
                defaultValue={val.whatIsTheCause}
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
                defaultValue={val.Conclusion}
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
                defaultValue={val.whatMsgToCustomer}
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
                defaultValue={val.componentsUsedInRepair}
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
                defaultValue={val.userName}
                type="text"
                name="userName"
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
                  setIsToggled(true);
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
