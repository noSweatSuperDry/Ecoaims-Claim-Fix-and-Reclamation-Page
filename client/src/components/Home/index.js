import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Claim from "../Claim";
import Reclamation from "../Reclamation";
import Search from "../Search";
import LoginPage from "../LoginPage";

function Home() {
  const adminUser = {
    userId: "root",
    password: "123",
  };
  const [user, setUser] = useState({ userId: "", password: "" });
  // eslint-disable-next-line
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    console.log(adminUser + adminUser.userId + adminUser.password);
    if (
      details.userId === adminUser.userId &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        userId: details.userId,
      });
    } else {
      alert("Please enter correct password.");
      console.log("Details do not match !");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ userId: "", password: "" });
  };

  return (
    <div>
      {user.userId !== "" ? (
        <div>
          <BrowserRouter>
            <h2>
              {" "}
              Welcome, <span>{user.userId}</span> !
            </h2>
            <div className="navBar">
              <NavLink to="/">
                <button className="idPassCard">Claims and Fixes</button>
              </NavLink>
              <NavLink to="/reclamation">
                <button className="idPassCard"> Internal Reclamations</button>
              </NavLink>
              <NavLink to="/search">
                <button className="idPassCard"> Search</button>
              </NavLink>
              <NavLink to="/">
                <button className="idPassCard" onClick={Logout}>
                  Logout
                </button>
              </NavLink>
            </div>
            <Routes>
              <Route exact path="/" element={<Claim />} />
              <Route exact path="/reclamation" element={<Reclamation />} />
              <Route exact path="/search" element={<Search />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <LoginPage Login={Login} error={error} />
      )}
    </div>
  );
}
export default Home;
