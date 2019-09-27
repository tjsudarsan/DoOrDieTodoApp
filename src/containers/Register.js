import React, { Component } from "react";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    emailId: "",
    name: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <div className="col-6">
          <h3>Sign Up</h3>
          <hr />
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Good Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="emailId"
                  value={this.state.emailId}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Go
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
