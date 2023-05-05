import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Claim from "../Claim";
import Reclamation from "../Reclamation";
import Search from "../Search";
import LogOut from "../LogOut";
import ReclamationSearch from "../ReclamationSearch";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <h2>Welcome</h2>
        <div className="navBar">
          <NavLink to="/">
            <button className="idPassCard">Claims and Fixes</button>
          </NavLink>
          
          <NavLink to="/search">
            <button className="idPassCard"> Search Claim DataBase</button>
          </NavLink>
          <NavLink to="/reclamation">
            <button className="idPassCard"> Internal Reclamations</button>
          </NavLink>
          <NavLink to="/reclamationsearch">
            <button className="idPassCard"> Search Reclamation DataBase </button>
          </NavLink>
          <LogOut />
        </div>
        <Routes>
          <Route exact path="/" element={<Claim />} />
          <Route exact path="/reclamation" element={<Reclamation />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/reclamationsearch" element={<ReclamationSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Home;
