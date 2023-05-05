import React from "react";
import "./css/App.css";
import Home from "./components/Home/index";
import LoginPage from "../src/components/LoginPage/index";
import useToken from "./components/Auth";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
