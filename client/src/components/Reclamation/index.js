import React, { useState } from "react";
import Axios from "axios";

function Reclamation() {
  const [reclamationInfo, setReclamationInfo] = useState({});
  const [success, setSuccess] = useState("");
  console.log(JSON.stringify(reclamationInfo));
  const handleInputChangeR = (event) => {
    const { name, value } = event.target;
    setReclamationInfo((prevReclamationInfo) => ({
      ...prevReclamationInfo,
      [name]: value,
      userNameR: userData,
    }));
  };
  const user = JSON.parse(sessionStorage.getItem("globalData"));
  const userData = user[0].firstName + " " + user[0].lastName;

  const handleSubmitR = async () => {
    await Axios.post(
      "http://ecoaims-crud-server.onrender.com/reclamation/add",
      { reclamationInfo: reclamationInfo }
    )
      .then(() => {
        setSuccess("sucessfuly Added");
      })
      .catch(() => {
        alert("Failed! Reclamation Data merging Failed!");
      });
  };

  return (
    <div>
      {!success ? (
        <div className="pageOutlet">
          <h1>Report Internal Reclamations</h1>
          <p>
            Please fill up the forms carefully. Red bordered fields are
            mendatory field. In case you made mistakes, please edit or delete
            and re-entry
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
            <input
              type="text"
              name="electricalComponentType"
              onChange={handleInputChangeR}
            />
            <br />
            <label>7. Mechanical component type ? </label>
            <input
              type="text"
              name="mechanicalComponentType"
              onChange={handleInputChangeR}
            />
            <br />
            <label>8. Information: </label>
            <textarea
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
            <textarea
              type="text"
              name="whatIsTheCauseR"
              onChange={handleInputChangeR}
            />
            <br />
            <label>11. Conclusion ? </label>
            <textarea
              type="text"
              name="conclusionR"
              onChange={handleInputChangeR}
            />
            <br />
            <label>12. Repaired/Changed components:</label>
            <textarea
              type="text"
              name="repairedChangedComponent"
              onChange={handleInputChangeR}
            />
            <br />
            <label>Reclamation will be added by: {userData} </label>

            <br />
            <button
              className="idPassCard"
              type="submit"
              onClick={handleSubmitR}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div
          className="loginForm pageOutlet"
          style={{ margin: "auto", marginTop: "2cm" }}
        >
          <h1>Reclamation Data Added</h1>
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
export default Reclamation;
