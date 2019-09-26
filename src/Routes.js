import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./containers/Dashboard";
import AboutUs from "./containers/AboutUs";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

const Routes = props => {
  return (
    <Switch>
      <Route path="/" component={props.isLoggedIn ? Dashboard : Login} exact />
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
