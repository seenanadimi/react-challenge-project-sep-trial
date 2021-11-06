import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/actions/authActions";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    dispatch(registerUser(userData.email, userData.password, history));
  };

  return (
    <form onSubmit={register}>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          placeholder="test@test.com"
          name="email"
          value={userData.email}
          onChange={onChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          name="password"
          value={userData.password}
          onChange={onChange}
        ></input>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
