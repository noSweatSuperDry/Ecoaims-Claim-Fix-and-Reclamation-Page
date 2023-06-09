import React, { useState } from "react";
import "./index.css";
import Axios from "axios";
import { Image } from "cloudinary-react";
function Profile() {
  const [userUpdated, setUSerUpdated] = useState({});

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
  const imageUrl = user.userPhoto;
  console.log(id);
  const handleUpdateProduct = async (id) => {
    await Axios.put(
      `https://${process.env.REACT_APP_SERVER_URL}/users/update/${id}`,
      {
        userUpdated,
      }
    )
      .then(() => {
        alert("Password Changed!!");
        window.location.reload("/profile");
      })
      .catch((error) => {
        alert("Can not Change Password, Pleas contact ADMIN");
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
    <div className="profile">
      <br />
      <h2>User Profile:</h2>
      <div className="flowright">
        <Image cloudName="ecoaimsprofile" publicId={imageUrl} width="200" />
      </div>
      <div className="flowright">
        <p>User ID: </p>
        <p>{userId}</p>
      </div>
      <div className="flowright">
        <p>Name</p>
        <p> {firstName + " " + lastName}</p>
      </div>

      <div className="flowright">
        <p>Email: </p>
        <p>{userEmail}</p>
      </div>

      <div className="flowright">
        <p>Change Password:</p>
        <p>
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
        </p>
      </div>
      <div className="flowright">
        <p>Account Creation:</p>
        <p>{created}</p>
      </div>
      <div className="flowright">
        <p>Account Last Update:</p>
        <p>{updated}</p>
      </div>
    </div>
  );
}

export default Profile;
