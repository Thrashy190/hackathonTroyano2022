import React, { useState } from "react";
import Nav from "../../Components/Shared/nav";
import LoginComponent from "../../Components/Login/Login/LoginComponent";
import RegisterComponent from "../../Components/Login/Register/RegisterComponent";

const Login = () => {
  const [viewLogin, setViewLogin] = useState(true);

  return (
    <div>
      <Nav />
      {viewLogin ? (
        <LoginComponent setViewLogin={setViewLogin} />
      ) : (
        <RegisterComponent setViewLogin={setViewLogin} />
      )}
    </div>
  );
};

export default Login;
