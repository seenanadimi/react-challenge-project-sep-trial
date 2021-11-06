import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

function Main() {
  return (
    <div className="main-body">
      <h1>Bruce's Diner Ordering Application</h1>
      <h2>Please register or login to continue</h2>
      <div>
        <Link to={"/register"}>
          <button className="btn btn-primary m-1">Register</button>
        </Link>
        <Link to={"/login"}>
          <button className="btn btn-primary m-1">Go To Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
