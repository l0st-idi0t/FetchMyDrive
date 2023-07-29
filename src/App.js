import "./App.css";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const App = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
      <h2>Download Your Drive Files</h2>
      <div className="Modal">
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </div>
  );
};

export default App;
