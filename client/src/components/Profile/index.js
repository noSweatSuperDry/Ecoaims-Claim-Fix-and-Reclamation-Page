import React, { useState } from "react";
import "./index.css";
import Axios from "axios";

function Profile() {
  const [userUpdated, setUSerUpdated] = useState({});
  const [success, setSuccess] = useState("");
  console.log(userUpdated);
  const globalID = sessionStorage.getItem("globalData");
  const user = JSON.parse(globalID)[0]; // assuming there's only one user object in the array
  const firstName = user.firstName;
  const lastName = user.lastName;
  const userId = user.username;
  const userEmail = user.userEmail;
  const created = user.createdAt;
  const updated = user.updatedAt;
  const id = user._id;
  console.log(id);
  const handleUpdateProduct = async (id) => {
    await Axios.put(`http://localhost:5001/users/update/${id}`, {
      userUpdated,
    })
      .then((res) => {
        setSuccess("Password Change Successful");
        console.log(res.data);
      })
      .catch((error) => {
        setSuccess("Password Change Successful");
        console.error("Error updating :" + error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUSerUpdated((information) => ({
      ...information,
      [name]: value,
    }));
  };

  return (
    <div className="flowdown pageOutlet ">
      <br />
      <h2>User Profile:</h2>
      <div className="flowright">
        <h1>User ID: </h1>
        <h1>{userId}</h1>
      </div>
      <div className="flowright">
        <h1>Name</h1>
        <h1> {firstName + " " + lastName}</h1>
      </div>

      <div className="flowright">
        <h1>Email: </h1>
        <h1>{userEmail}</h1>
      </div>

      <div className="flowright">
        <h1>Change Password:</h1>
        <h1>
          <input
            type="text"
            name="userPassword"
            onChange={handleInputChange}
          ></input>
          <button
            className="disabled"
            onClick={() => {
              handleUpdateProduct(id);
            }}
          >
            Change
          </button>
          {!success ? (
            <p>Press Change</p>
          ) : (
            <p style={{ color: "blue" }}>{success}</p>
          )}
        </h1>
      </div>
      <div className="flowright">
        <h1>Account Creation:</h1>
        <h1>{created}</h1>
      </div>
      <div className="flowright">
        <h1>Account Last Update:</h1>
        <h1>{updated}</h1>
      </div>
    </div>
  );
}

export default Profile;
