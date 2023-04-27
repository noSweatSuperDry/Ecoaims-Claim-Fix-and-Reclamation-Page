import React, { useState } from "react";
import Axios from "axios";


function LoginPage() {
  const [details, setDetails] = useState({ userId: "", password: "" });
  console.log(details);
  
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const userId = details.userId;
    const password = details.password;
  
    Axios.get(`http://localhost:5001/users/${userId}/${password}`) // Send a GET request to the API with the user details
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="loginForm">
        <label className="idPassCard" htmlFor="userId">
          User ID:
          <input
            type="text"
            name="userId"
            id="userId"
            autoFocus
            onChange={(e) => setDetails({ ...details, userId: e.target.value })}
            
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
            autoFocus
          />
        </label>
        <input
          style={{ fontWeight: "bolder" }}
          className="idPassCard"
          type="submit"
          value="Sign In"
        />
      </div>
    </form>
  );
}

export default LoginPage;
