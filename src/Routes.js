import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./containers/Dashboard";
import AboutUs from "./containers/AboutUs";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Register from "./containers/Register";

const Routes = props => {
  return (
    <Switch>
      {props.isLoggedIn ? (
        <Route path="/" component={Dashboard} exact />
      ) : (
        <>
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Register} exact />
        </>
      )}
      <Route path="/aboutus" component={AboutUs} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(Routes);
