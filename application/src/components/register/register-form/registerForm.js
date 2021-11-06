import React, { useState } from "react";
import axios from "axios";
import { SERVER_IP } from "../../../private";
import { useHistory } from "react-router";
// import { useDispatch } from "react-redux";
// import { finishRegister } from "../../../redux/actions/authActions";
const REGISTER = `${SERVER_IP}/api/register`;

const RegisterForm = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post(REGISTER, {
        email: userData.email,
        password: userData.password,
      });
      history.push("/login");
    } catch (err) {
      console.log(err.response.data.msg);
    }
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
