import React, { useState } from "react";
import Axios from "axios";


function Reclamation() {
  const [reclamationInfo, setReclamationInfo] = useState({});
  console.log(reclamationInfo);

  const handleInputChangeR = (event) => {
    const { name, value } = event.target;
    setReclamationInfo((prevReclamationInfo) => ({
      ...prevReclamationInfo,
      [name]: value,
    }));
  };

  const handleSubmitR = async () => {
    await Axios.post("http://localhost:5001/reclamation/add", { reclamationInfo: reclamationInfo }).then(() => {
      console.log(reclamationInfo);
        alert("Reclamation Added: " + JSON.stringify(reclamationInfo))
      }).catch(() => {
        alert("Failed! Reclamation Data merging Failed!")
      })
  };

  return (
    <div className="pageOutlet">
      <h1>Report Internal Reclamations</h1>
      <p>
        Please fill up the forms carefully. Red bordered fields are mendatory field.
        In case you made mistakes, please edit or delete and re-entry
      </p>

      <div className="textAndButton">
        <label>1. Issue Date: </label>
        <input
          type="date"
          name="issueDate"
          onChange={handleInputChangeR}
          required
        />
        <br />
        <label>2. Product/Part Name:</label>
        <input
          type="text"
          name="partName"
          onChange={handleInputChangeR}
          required
        />
        <br />
        <label>3. Device Serial Number:</label>
        <input
          type="text"
          name="deviceSerialNumber"
          onChange={handleInputChangeR}
        />
        <br />
        <label>4. How many ?</label>
        <input
          type="number"
          name="howMany"
          onChange={handleInputChangeR}
          required
        />
        <br />
        <label>5. LemonSoft Issue Number: </label>
        <input
          type="number"
          name="lemonSoftIssueNumber"
          onChange={handleInputChangeR}
          required
        />
        <br />
        <label>6. Electrical component type ? </label>
        <input type="text" name="electricalComponentType" onChange={handleInputChangeR} />
        <br />
        <label>7. Mechanical component type ? </label>
        <input
          type="text"
          name="mechanicalComponentType"
          onChange={handleInputChangeR}
        />
        <br />
        <label>8. Information: </label>
        <input
          type="text"
          name="information"
          onChange={handleInputChangeR}

        />
        <br />
        <label>9. Cause is known ? </label>
        <input
          type="text"
          name="causeKnownR"
          onChange={handleInputChangeR}

        />
        <br />
        <label>10. What is the cause ? </label>
        <input
          type="text"
          name="whatIsTheCauseR"
          onChange={handleInputChangeR}
        />
        <br />
        <label>11. Conclusion ? </label>
        <input
          type="text"
          name="conclusionR"
          onChange={handleInputChangeR}

        />
        <br />
        <label>12. Repaired/Changed components:</label>
        <input type="text" name="repairedChangedComponent" onChange={handleInputChangeR} />
        <br />
        <label>13. Please Write your Name: </label>
        <input
          type="text"
          name="userNameR"
          onChange={handleInputChangeR}
          required
        />
        <br />
        <br />
        <button className="idPassCard" type="submit" onClick={handleSubmitR}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default Reclamation;
