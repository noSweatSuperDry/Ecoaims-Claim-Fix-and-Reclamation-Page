import React, { useState } from "react";
import Axios from "axios";

function Claim() {
  const [productInfo, setProductInfo] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await Axios.post("http://localhost:5001/claims/add", { productInfo: productInfo }).then(() => {
      alert("Claim Added To database")
    }).catch(() => {
      alert("Failed! Data merging Failed!")
    })
  };

  return (
    <div className="pageOutlet">
      <h2>Report Claims and Fixes Here.</h2>
      <p>
        Please fill up the forms carefully. Red bordered fields are mendatory field.
        In case you made mistakes, please edit or delete and re-entry
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
        <input
          type="text"
          name="reportByCustomer"
          onChange={handleInputChange}
        />
        <br />
        <label>11. Report By Ecoaims: </label>
        <input
          type="text"
          name="reportByEcoaims"
          onChange={handleInputChange}
          required
        />
        <br />
        <label>12. Cause is known ? </label>
        <input type="text" name="causeKnown" onChange={handleInputChange} />
        <br />
        <label>13. What is the cause ? </label>
        <input type="text" name="whatIsTheCause" onChange={handleInputChange} />
        <br />
        <label>14. Conclusion: </label>
        <input type="text" name="Conclusion" onChange={handleInputChange} />
        <br />
        <label>15. What message sent to customer? </label>
        <input
          type="text"
          name="whatMsgToCustomer"
          onChange={handleInputChange}
        />
        <br />
        <label>16. Repaired/Changed components: </label>
        <input
          type="text"
          name="componentsUsedInRepair"
          onChange={handleInputChange}
          required
        />
        <br />
        <label>17. Please Write your Name: </label>
        <input
          type="text"
          name="userName"
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button className="idPassCard" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Claim;
