import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../css/App.css";
import "./index.css";
import { Image } from "cloudinary-react";
import { BallTriangle } from "react-loading-icons";

function Register({ onBackToLogin }) {
  const [userCredential, setUserCredential] = useState({});
  const [success, setSuccess] = useState("");
  const [imageSelected, setImageSelected] = useState();
  const [userPhoto, setUserPhoto] = useState();
  const [isLoading, setIsLoading] = useState(false);
  console.log(userCredential);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredential((prevData) => ({
      ...prevData,
      [name]: value,
      userPhoto: userPhoto,
    }));
  };
  useEffect(() => {
    // This code will be executed when the component is mounted
    setUserCredential((prevData) => ({
      ...prevData,
      userPhoto: userPhoto,
    }));
  }, [userPhoto]);
  const handleSubmit = async () => {
    setIsLoading(true);
    await Axios.post(`https://${process.env.REACT_APP_SERVER_URL}/users/add`, {
      userCredential: userCredential,
    })
      .then((res) => {
        setSuccess("sucessfuly Added");
        console.log("success" + res);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Failed!");
      });
  };

  //image API
  const uploadImage = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "ecoaimsPreset");

    try {
      const response = await Axios.post(
        `https://api.cloudinary.com/v1_1/ecoaimsprofile/image/upload`,
        formData
      );
      const urlLink = response.data.url;
      setUserPhoto(urlLink);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!success ? (
        <div className="pageOutlet">
          <h2>Report Claims and Fixes Here.</h2>
          <p>
            Register your user ID. Remember! You should provide your Email
            address to Register.
          </p>
          <div className="textAndButton">
            <label>First Name </label>
            <input
              className="input-box"
              type="text"
              name="firstName"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Last Name </label>
            <input
              className="input-box"
              type="text"
              name="lastName"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>User ID (maximum 10 chars/minimum 3 chars): </label>
            <input
              className="input-box"
              type="text"
              name="username"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Set a new password: </label>
            <input
              className="input-box"
              type="text"
              name="userPassword"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Email address: </label>
            <input
              className="input-box"
              id="emailAddress"
              type="email"
              name="userEmail"
              placeholder="username@domain.com"
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Choose a Photo and Press upload.</label> <br />
            <input
              type="file"
              onChange={(event) => {
                setImageSelected(event.target.files[0]);
              }}
            />
            <br />
            <button className="idPassCard" onClick={uploadImage}>
              Upload Image
            </button>
            {userPhoto && (
              <Image
                cloudName="ecoaimsprofile"
                publicId={userPhoto}
                width="200"
              />
            )}
            <br />
            {isLoading && (
              <div>
                <BallTriangle width={30} stroke="yellowgreen" />
              </div>
            )}
            <br />
            <button className="idPassCard" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </div>
      ) : (
        <div
          className="loginForm pageOutlet"
          style={{ margin: "auto", marginTop: "2cm" }}
        >
          <h1>UserID: {userCredential.username} Added</h1>
          <br />
          <button
            className="idPassCard"
            onClick={() => {
              setSuccess("");
              setUserPhoto("");
            }}
          >
            Add Another
          </button>
        </div>
      )}
      <button className="idPassCard" onClick={onBackToLogin}>
        Back
      </button>
    </div>
  );
}

export default Register;
