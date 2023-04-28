import React, { useState } from "react";
import Axios from "axios";


function LoginPage() {
  const [details, setDetails] = useState({ userId: "", password: "" });
  console.log(details);

  const submitHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const userId = details.userId;
    const password = details.password;
   await Axios.get(`http://localhost:5001/users/${userId}/${password}`) // Send a GET request to the API with the user details
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        successfulPage();
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const successfulPage = () => {
    console.log("PAGE LOAD");
  }
  const registerPage =()=>{
    console.log('REGISTER');
  }

  return (
    <div className="loginForm">
    <form  onSubmit={submitHandler}>
        <label className="idPassCard" htmlFor="userId">
          User ID:
          <input
            type="text"
            placeholder="Please provide your ID"
            autoFocus
            onChange={(e) => setDetails({ ...details, userId: e.target.value })}

          />
        </label>
        <label className="idPassCard" htmlFor="password">
          Password:
          <input
            type="password"
            placeholder="Give your password"
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
          
    </form> <button
          style={{ fontWeight: "bolder" }}
          className="idPassCard"
          onClick={registerPage}>
            Register
          </button>
          </div>
  );
}

export default LoginPage;
