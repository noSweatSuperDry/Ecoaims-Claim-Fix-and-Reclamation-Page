import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [token, setToken] = useState();

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
