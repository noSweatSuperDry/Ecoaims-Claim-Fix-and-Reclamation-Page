import React, { useState } from "react";
import "../css/App.css";
import News from "./News";
function LoginPage({ Login, error }) {
  const [details, setDetails] = useState({ userId: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="loginForm">
        <News />
        <label className="idPassCard" htmlFor="userId">
          User ID:
          <input
            type="text"
            name="userId"
            id="userId"
            autoFocus
            onChange={(e) => setDetails({ ...details, userId: e.target.value })}
            value={details.userId}
          />
        </label>
        <label className="idPassCard" htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </label>
        <input className="idPassCard" type="submit" value="Sign In" />
      </div>
    </form>
  );
}

export default LoginPage;
