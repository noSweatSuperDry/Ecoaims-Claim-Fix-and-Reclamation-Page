import React, { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import "../../css/App.css";
import Register from "../Register";

export default function LoginPage({ setToken }) {
  const [showRegister, setShowRegister] = useState(false);
  const [userCredential, setUserCredential] = useState({});

  const username = JSON.stringify(userCredential.username);

  const password = JSON.stringify(userCredential.password);
  console.log(username, password);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredential((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.get(
      `http://localhost:5001/users/${userCredential.username}/${userCredential.password}`
    )
      .then((response) => {
        const inputString = response.data[0]._id;
        const inputArray = inputString.split("");

        // The Fisher-Yates shuffle algorithm
        for (let i = inputArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
        }

        // Convert the shuffled array back to a string
        const token = inputArray.join("");

        setToken(token);
        console.log(token);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  // new click handler for Register button
  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleBackToLogin = () => {
    setShowRegister(false);
  };

  if (showRegister) {
    return <Register onBackToLogin={handleBackToLogin} />;
  }

  return (
    <div className="pageOutlet">
      <h1 className="idPassCard titleCard">
        Sign In for Submitting Claims or Reclamations. <br />
        You can also view/update/edit/remove them.
      </h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="idPassCard">
          Username
          <input
            placeholder="Enter User ID"
            name="username"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label className="idPassCard">
          Password
          <input
            placeholder="Enter User Password"
            type="password"
            name="password"
            onChange={handleInputChange}
          />
        </label>
        <div>
          <button className="idPassCard" type="submit">
            Sign In
          </button>
        </div>
      </form>

      <p className="titleCard" style={{ paddingTop: "1cm" }}>
        New User ? Click "Register" to register as a user.
      </p>
      <button className="idPassCard" onClick={handleRegisterClick}>
        Register
      </button>
    </div>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
