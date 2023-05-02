import React from "react";
import "./css/App.css";
import Home from "./components/Home/index";
import LoginPage from "../src/components/LoginPage/index";
import useToken from "./components/Auth";

function App() {
  const { token, setToken } = useToken();
  if (!token || token === "null") {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <Home />
    </div>
  );
}

export default App;
