import React, { useState } from "react";
import Axios from "axios";
import "../../css/App.css";
function Register() {
  const [username, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userToken, setUserToken] = useState("");
  const [message, setMessage] = useState("");
  console.log(userToken, username, userPassword);

  const submitHandler = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:5001/users/add", {
      username: username,
      userPassword: userPassword,
      userToken: userToken,
    })
      .then(() => {
        setMessage(`User ID ${username} registered`);
      })
      .catch(() =>
        setMessage(
          `${username} has been taken already. Register with another ID`
        )
      );
  };

  const generateString = (length) => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const generateUniqueString = (len) => {
    let str;
    do {
      str = generateString(len);
    } while (new Set([userToken]).has(str));
    return str;
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      const newToken = generateUniqueString(32);
      console.log(newToken);
      setUserToken(newToken);
    } else {
      setUserToken("");
    }
  };

  return (
    <div>
      {!message ? (
        <form className="loginForm" onSubmit={submitHandler}>
          <h1 className="idPassCard titleCard">REGISTER USER</h1>
          <label className="idPassCard" htmlFor="userId">
            User ID:
            <input
              type="text"
              placeholder="Please provide your User Name"
              autoFocus
              width={window.width}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label className="idPassCard" htmlFor="password">
            Password:
            <input
              type="password"
              placeholder="Please provide your User Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
          <label className="idPassCard" htmlFor="checkbox">
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              value="Yes, I want to make an account"
            />
            Yes, I want to make an account
          </label>
          <input
            style={{ fontWeight: "bolder" }}
            className="idPassCard"
            type="submit"
            value="Register"
          />
        </form>
      ) : (
        <div>
          <p style={{ fontSize: "20px" }}>{message}</p>
          <button
            className="idPassCard"
            onClick={() => {
              setMessage("");
            }}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
}

export default Register;
