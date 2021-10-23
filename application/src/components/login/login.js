import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import LoginForm from "./login-form/loginForm";
import "./login.css";

const Login = (props) => {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      props.history.push("/order");
    }
  }, [token]);

  return (
    <div className="main-body">
      <h1 className="text-center">Login Screen</h1>
      <div className="d-flex justify-content-center mt-5">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
