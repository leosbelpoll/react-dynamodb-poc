import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/Login";

export default function PrivateRouter() {
  return (
    <Switch>
      <Route path="*">
        <Login />
      </Route>
    </Switch>
  );
}
