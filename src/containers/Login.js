import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <div className="col-4">
          <h3>Login</h3>
          <hr />
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/signup" className="ml-2">
              Not Yet signed Up? Click Here
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
