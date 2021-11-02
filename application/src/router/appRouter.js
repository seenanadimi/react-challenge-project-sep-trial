import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main, Login, OrderFormHook, ViewOrdersHook } from "../components";
import GaurdedRoute from "./gaurdedRoute/guardedRoute";

const AppRouter = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <GaurdedRoute path="/order" exact component={OrderFormHook} />
      <GaurdedRoute path="/view-orders" exact component={ViewOrdersHook} />
    </Router>
  );
};

export default AppRouter;
