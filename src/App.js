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
      <h2>React Google Login</h2>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};

export default App;
