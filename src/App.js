import "./App.css";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const App = () => {
  const responseMessage = (response) => {
    localStorage.setItem("access_token", response.credentials);
    console.log(response.credentials);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const listDriveFiles = () => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      axios
        .get("https://www.googleapis.com/drive/v3/files", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log("Files:", response.data.files);
        })
        .catch((error) => {
          console.error("Error listing files:", error);
        });
    }
  };

  return (
    <div className="App">
      <h2>Download Your Drive Files</h2>
      <div className="Modal">
        <h3>Please sign in</h3>
        <GoogleLogin
          onSuccess={responseMessage}
          onError={errorMessage}
          scope="https://www.googleapis.com/auth/drive.readonly"
        />
        <button onClick={listDriveFiles}>List Drive Files</button>
      </div>
    </div>
  );
};

export default App;
