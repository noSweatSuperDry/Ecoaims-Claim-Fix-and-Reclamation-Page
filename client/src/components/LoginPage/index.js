import React, { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import "../../css/App.css";
import Register from "../Register";
import { BallTriangle } from "react-loading-icons";

export default function LoginPage({ setToken }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [userCredential, setUserCredential] = useState({});
  const [error, setError] = useState("");
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
    setIsLoading(true);
    await Axios.get(
      `https://ecoaims-crud-server.onrender.com/users/${userCredential.username}/${userCredential.password}`
    )
      .then((response) => {
        const inputString = response.data[0]._id;
        const inputArray = inputString.split("");

        // shuffle algorithm
        for (let i = inputArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
        }

        // Convert the shuffled array back to a string
        const token = inputArray.join("");
        setToken(token);
        // Store the globalId value in the session storage
        sessionStorage.setItem("globalId", response.data[0].username);
        sessionStorage.setItem("globalData", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("Error: " + error);
        setError(
          "Wrong User ID or Password. Remember! User Id and Passwords are case senstive."
        );
        setIsLoading(false);
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
        <label className="idPassCard custom">
          Username:
          <input
            placeholder="Enter User ID"
            name="username"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label className="idPassCard custom">
          Password:
          <input
            placeholder="Enter User Password"
            type="password"
            name="password"
            onChange={handleInputChange}
          />
        </label>
        <br />
        {isLoading && (
          <div>
            <BallTriangle width={30} stroke="yellowgreen" />
          </div>
        )}
        <br />
        <div>
          <button className="idPassCard" type="submit">
            Sign In
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
