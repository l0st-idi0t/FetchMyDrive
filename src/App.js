import "./App.css";
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import authClient from "./logic";

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  const responseMessage = (response) => {
    setAccessToken(response.credentials);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
      <h2>Download Your Drive Files</h2>
      <div className="Modal">
        <h3>Please sign in</h3>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </div>
  );
};

export default App;
