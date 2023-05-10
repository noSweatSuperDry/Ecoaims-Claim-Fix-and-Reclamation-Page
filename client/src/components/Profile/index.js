import React, { useState } from "react";
import "./index.css";
import Axios from "axios";
import {Image} from 'cloudinary-react';
function Profile() {
  const [userUpdated, setUSerUpdated] = useState({});
  const [success, setSuccess] = useState("");
  const [imageSelected, setImageSelected]= useState();
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
        setSuccess("Password Changed Successfuly");
        console.log(res.data);
      })
      .catch((error) => {
        setSuccess("Can not Change Password, Pleas contact ADMIN");
        console.error("Error updating :" + error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUSerUpdated((information) => ({
      ...information,
      [name]: value,
      imageSelected:imageSelected
    }));
  };


//image API
const uploadImage =()=>{
const formData = new FormData()
formData.append("file",imageSelected)
formData.append("upload_preset", "ecoaimsPreset")
Axios.post("https://api.cloudinary.com/v1_1/ecoaimsprofile/image/upload",
formData).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);})
console.log(formData);
};






  return (
    <div className="profile" >
      <br/>
      <h2>User Profile:</h2>
      <div className="flowright">
        <Image cloudName="ecoaimsprofile" publicId="https://res.cloudinary.com/ecoaimsprofile/image/upload/v1683718853/ipi1btn6zhgamfxrolnh.jpg"/>
        <input type="file" onChange={(event)=>{setImageSelected(event.target.files[0])}}/>
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      <div className="flowright">
        <p>User ID:  </p>
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
          
        </p>{!success ? (
            <p>Write a new password and press "Change"</p>
          ) : (
            <p style={{ color: "blue" }}>{success}</p>
          )}
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
