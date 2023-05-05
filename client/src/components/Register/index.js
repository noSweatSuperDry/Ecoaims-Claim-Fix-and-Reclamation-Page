import React, { useState } from "react";
import Axios from "axios";
import "../../css/App.css";
function Register({ onBackToLogin }) {

    const [userCredential, setUserCredential] = useState({});
    const [success, setSuccess] = useState('');
    console.log(userCredential);
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserCredential((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

  
    const handleSubmit = async () => {
      await Axios.post("http://localhost:5001/users/add", { userCredential: userCredential }).then(() => {
        setSuccess("sucessfuly Added");
  
      }).catch(() => {
        alert("Failed!")
      })
    };
  
    return (
      <div>
      {!success ? (<div className="pageOutlet">
        <h2>Report Claims and Fixes Here.</h2>
        <p>
         Register your user ID. Remember! You should provide your Email address to Register.
        </p>
  
        <div className="textAndButton">
          <label>User ID (maximum 8 chars/minimum 3 chars): </label>
          <input
            type="text"
            name="username"
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Set a new password: </label>
          <input
            type="text"
            name="userPassword"
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Email address: </label>
          <input
            type="email"
            name="userEmail"
            onChange={handleInputChange}
            required
          />
          <br />

          <input type="checkbox" id="terms-checkbox" required/>
<label for="terms-checkbox">Yes, I agree to send my information and register in Ecoaims Assembly Database.</label>
        
          <br />
         
          <button className="idPassCard" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>): (<div className="loginForm pageOutlet" style={{margin:"auto", marginTop:"2cm"}}><h1>UserID: {userCredential.username} Added</h1><br/><button className="idPassCard" onClick={()=>{
        setSuccess("");
      }}>Add Another</button></div>)}
      <button className="idPassCard" onClick={onBackToLogin}>Back</button>
      </div>
    );
  }
  
  export default Register;
  