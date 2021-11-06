import { LOGIN, LOGOUT } from "./types";
import { SERVER_IP } from "../../private";

export const finishLogin = (email, token) => {
  return {
    type: LOGIN,
    payload: {
      email,
      token,
    },
  };
};
export const loginUser = (email, password) => {
  return (dispatch) => {
    fetch(`${SERVER_IP}/api/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(finishLogin(response.email, response.token));
        }
      });
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};

export const registerUser = (email, password, history) => {
  return () => {
    fetch(`${SERVER_IP}/api/register`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    history.push("/login");
  };
};
