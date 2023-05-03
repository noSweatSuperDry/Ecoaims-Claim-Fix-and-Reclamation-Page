import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Claim from "../Claim";
import Reclamation from "../Reclamation";
import Search from "../Search";
import LogOut from "../LogOut";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <h2>Welcome</h2>
        <div className="navBar">
          <NavLink to="/home">
            <button className="idPassCard">Claims and Fixes</button>
          </NavLink>
          <NavLink to="/reclamation">
            <button className="idPassCard"> Internal Reclamations</button>
          </NavLink>
          <NavLink to="/search">
            <button className="idPassCard"> Search</button>
          </NavLink>
          <LogOut />
        </div>
        <Routes>
          <Route exact path="/home" element={<Claim />} />
          <Route exact path="/reclamation" element={<Reclamation />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Home;
