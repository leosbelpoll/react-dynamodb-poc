import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import JobList from "../jobs/JobList";
import Header from "../parts/Header";

export default function PrivateRouter() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="mt-4">
          <Switch>
            <Route exact path="/">
              <JobList />
            </Route>
            <Route exact path="/dash">
              <Home />
            </Route>
            <Route exact path="/login">
              <Redirect to="/" />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}
