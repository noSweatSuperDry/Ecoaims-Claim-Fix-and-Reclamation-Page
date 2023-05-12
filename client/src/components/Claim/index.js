import React, { useState } from "react";
import Axios from "axios";
import "./index.css";
function Claim() {
  const [productInfo, setProductInfo] = useState({});
  const [success, setSuccess] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
      userName: userData || "Unknown User",
    }));
  };
  const user = JSON.parse(sessionStorage.getItem("globalData"));
  const userData = user[0].firstName + " " + user[0].lastName;

  const handleSubmit = async () => {
    await Axios.post(`https://${process.env.REACT_APP_SERVER_URL}/claims/add`, {
      productInfo: productInfo,
    })
      .then(() => {
        setSuccess("sucessfuly Added");
      })
      .catch(() => {
        alert("Failed! Data merging Failed!");
      });
  };

  return (
    <div>
      {!success ? (
        <div className="pageOutlet">
          <h2>Report Claims and Fixes Here.</h2>
          <p>
            Please fill up the forms carefully. Red bordered fields are
            mendatory field. In case you made mistakes, please edit or delete
            and re-entry
          </p>

          <div className="textAndButton">
            <label>1. Product Name: </label>
            <input
              type="text"
              name="productName"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>2. Product Serial No: </label>
            <input
              type="number"
              name="productSerialNumber"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>3. Issue Date: </label>
            <input
              type="Date"
              name="issueDate"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>4. Repair Date: </label>
            <input
              type="Date"
              name="repairDate"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>5. Device Manufacturing Date: </label>
            <input
              type="Date"
              name="manufacturingDate"
              onChange={handleInputChange}
            />
            <br />
            <label>6. PCB Model Number: </label>
            <input type="text" name="pcbModelNo" onChange={handleInputChange} />
            <br />
            <label>7. Laser Serial Number: </label>
            <input
              type="text"
              name="laserSerialNumber"
              onChange={handleInputChange}
            />
            <br />
            <label>8. LemonSoft Issue Number: </label>
            <input
              type="number"
              name="lemonSoftIssueNumber"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>9. Country: </label>
            <input
              type="text"
              name="country"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>10. Report By Customer: </label>
            <textarea
              type="text"
              name="reportByCustomer"
              onChange={handleInputChange}
            />
            <br />
            <label>11. Report By Ecoaims: </label>
            <textarea
              type="text"
              name="reportByEcoaims"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>12. Cause is known ? </label>
            <input type="" name="causeKnown" onChange={handleInputChange} />
            <br />
            <label>13. What is the cause ? </label>
            <textarea
              type="text"
              name="whatIsTheCause"
              onChange={handleInputChange}
            />
            <br />
            <label>14. Conclusion: </label>
            <textarea
              type="text"
              name="Conclusion"
              onChange={handleInputChange}
            />
            <br />
            <label>15. What message sent to customer? </label>
            <textarea
              type="text"
              name="whatMsgToCustomer"
              onChange={handleInputChange}
            />
            <br />
            <label>16. Repaired/Changed components: </label>
            <textarea
              type="text"
              name="componentsUsedInRepair"
              onChange={handleInputChange}
              required
            />
            <br />
            <label> Claim will be sumbmitted by: {userData} </label>
            <br />
            <br />
            <button className="idPassCard" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div
          className="loginForm pageOutlet"
          style={{ margin: "auto", marginTop: "2cm" }}
        >
          <h1>Claim Data Added</h1>
          <br />
          <button
            className="idPassCard"
            onClick={() => {
              setSuccess("");
            }}
          >
            Add Another
          </button>
        </div>
      )}
    </div>
  );
}

export default Claim;
