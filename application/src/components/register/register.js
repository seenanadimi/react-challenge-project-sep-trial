import React from "react";
import RegisterForm from "./register-form/registerForm";

const Register = () => {
  return (
    <div className="main-body">
      <h1 className="text-center">Register Screen</h1>
      <div className="d-flex justify-content-center mt-5">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
