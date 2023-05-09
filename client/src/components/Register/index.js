import React, { useState } from "react";
import Axios from "axios";
import "../../css/App.css";
import "./index.css";

function Register({ onBackToLogin }) {
  const [userCredential, setUserCredential] = useState({});
  const [success, setSuccess] = useState("");
  console.log(userCredential);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredential((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await Axios.post("http://localhost:5001/users/add", {
      userCredential: userCredential,
    })
      .then(() => {
        setSuccess("sucessfuly Added");
      })
      .catch(() => {
        alert("Failed!");
      });
  };

  return (
    <div>
      {!success ? (
        <div className="pageOutlet">
          <h2>Report Claims and Fixes Here.</h2>
          <p>
            Register your user ID. Remember! You should provide your Email
            address to Register.
          </p>

          <div className="textAndButton">
          <form onSubmit={handleSubmit}>
            <label>First Name </label>
            <input
              className="input-box"
              type="text"
              name="firstName"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Last Name </label>
            <input
              className="input-box"
              type="text"
              name="lastName"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>User ID (maximum 8 chars/minimum 3 chars): </label>
            <input
              className="input-box"
              type="text"
              name="username"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Set a new password: </label>
            <input
              className="input-box"
              type="text"
              name="userPassword"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Email address: </label>
            <input
              className="input-box"
              id="emailAddress"
              type="email"
              name="userEmail"
              placeholder="username@domain.com"
              
              onChange={handleInputChange}
              required
            />
            <br />

            <label for="terms-checkbox">
              {" "}
              <input type="checkbox" id="terms-checkbox" required />
              Yes, I agree to send my information and register in Ecoaims
              Assembly Database.
            </label>

            <br />

            <button className="idPassCard" type="submit">
              Submit
            </button>
            </form>
          </div>
        </div>
      ) : (
        <div
          className="loginForm pageOutlet"
          style={{ margin: "auto", marginTop: "2cm" }}
        >
          <h1>UserID: {userCredential.username} Added</h1>
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
      <button className="idPassCard" onClick={onBackToLogin}>
        Back
      </button>
    </div>
  );
}

export default Register;
