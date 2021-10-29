import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { logoutUser } from "../../redux/actions/authActions.js";
import { useSelector, useDispatch } from "react-redux";

const Nav = (props) => {
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();

  return (
    <div className="nav-strip">
      <div className="nav-link">
        <div className="nav-link-style">
          <label className="nav-label ">User: {email}</label>
        </div>
      </div>
      <Link to={"/order"} className="nav-link">
        <div className="nav-link-style">
          <label className="nav-label">Order Form</label>
        </div>
      </Link>
      <Link to={"/view-orders"} className="nav-link" id="middle-link">
        <div className="nav-link-style">
          <label className="nav-label">View Orders</label>
        </div>
      </Link>
      <Link
        to={"/"}
        onClick={() => dispatch(logoutUser())}
        className="nav-link"
      >
        <div className="nav-link-style">
          <label className="nav-label">Log Out</label>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
