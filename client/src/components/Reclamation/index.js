import React, { useState } from "react";
import Axios from "axios";


function Reclamation() {
  const [productInfo, setProductInfo] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await Axios.post("http://localhost:5001/reclamation/add", { productInfo: productInfo }).
    then(()=>{
      alert("Reclamation Added To database")
    }).catch(()=>{
      alert("Failed! Reclamation Data merging Failed!")})
  };

  return (
    <div className="pageOutlet">
      <h2>Report Internal Reclamations</h2>
      <p>
        Please fill up the forms carefully. Red bordered fields are mendatory field.
        In case you made mistakes, please edit or delete and re-entry
      </p>

      <div className="textAndButton">
        <label>1. Issue Date:</label>
        <input
          type="date"
          name="issueDate"
          onChange={handleInputChange}
          required
        />
        <br />
        <label>2. Product/Part Name:</label>
        <input
          type="text"
          name="partName"
          onChange={handleInputChange}
          required
        />
        <br />
        <label>3. Device Serial Number:</label>
        <input
          type="text"
          name="deviceSerialNumber"
          onChange={handleInputChange}
        />
        <br />
        <label>4. How many ?</label>
        <input
          type="number"
          name="howMany"
          onChange={handleInputChange}
          required
        />
        <br />
        <label>5. LemonSoft Issue Number: </label>
        <input
          type="number"
          name="lemonSoftIssueNumber"
          onChange={handleInputChange}
          required
        />
        <br />
        <label>6. Electrical component type ? </label>
        <input type="text" name="electricalComponentType" onChange={handleInputChange} />
        <br />
        <label>7. Mechanical component type ? </label>
        <input
          type="text"
          name="mechanicalComponentType"
          onChange={handleInputChange}
        />
        <br />
        <label>8. Information: </label>
        <input
          type="text"
          name="information"
          onChange={handleInputChange}
        
        />
        <br />
        <label>9. Cause is known ? </label>
        <input
          type="checkbox"
          name="causeKnownR"
          onChange={handleInputChange}
        
        />
        <br />
        <label>10. What is the cause ? </label>
        <input
          type="text"
          name="whatIsTheCauseR"
          onChange={handleInputChange}
        />
        <br />
        <label>11. Conclusion ? </label>
        <input
          type="text"
          name="conclusionR"
          onChange={handleInputChange}
          
        />
        <br />
        <label>12. Repaired/Changed components:</label>
        <input type="text" name="repairedChangedComponent" onChange={handleInputChange} />
        <br />
        <label>13. Please Write your Name: </label>
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
export default Reclamation;
