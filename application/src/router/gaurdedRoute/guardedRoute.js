import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GaurdedRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.auth.token);
  return (
    <Route {...rest}>
      {token ? <Component /> : <Redirect to={"/login"} />}
    </Route>
  );
};

export default GaurdedRoute;
