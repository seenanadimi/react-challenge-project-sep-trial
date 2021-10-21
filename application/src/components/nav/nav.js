import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { logoutUser } from "../../redux/actions/authActions.js";
import { useDispatch } from "react-redux";

const Nav = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="nav-strip">
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
        to={"/login"}
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
