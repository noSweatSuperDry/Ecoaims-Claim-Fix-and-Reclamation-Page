import React, { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import "../../css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Register from "../Register";

export default function LoginPage({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  console.log(username, password);
  const handleSubmit = async (e) => {
    await Axios.get(`http://localhost:5001/users/${username}/${password}`)
      .then((response) => {
        const { userToken } = response.data[0];
        console.log(userToken);
        setToken(userToken);
      })
      .catch(() => {
        setToken(null);
      });
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "fit-content",
        margin: "auto",
        padding: "1cm",
      }}
    >
      <h1 className="idPassCard titleCard">
        Sign In for Submitting Claims or Reclamations <br />
        You can also view/update/edit/remove them.
      </h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="idPassCard">
          Username
          <input
            placeholder="Enter your user ID"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label className="idPassCard">
          Password
          <input
            placeholder="Enter your user Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button className="idPassCard" type="submit">
            Sign In
          </button>
        </div>
      </form>{" "}
      <div>
        <p style={{ padding: "1cm" }}>
          New User ? Click "Register" to register as a user.
        </p>
        <Router>
          <Navigate to="/register">
            <button className="idPassCard">Register</button>
          </Navigate>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
