import React from "react";
import logo from "../assets/icons/list.svg";
import moment from "moment";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { connect } from "react-redux";
class Header extends React.Component {
  state = {
    currentTime: moment().format("DD MMM YYYY hh:mm A")
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: moment().format("DD MMM YYYY hh:mm A")
      });
    }, 1000);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" replace>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          &nbsp; DoOrDie
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                window.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                window.location.pathname === "/aboutus" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/aboutus">
                About
              </Link>
            </li>
          </ul>
        </div>
        {this.props.isLoggedIn && (
          <div className="dropdown">
            <span
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "white", marginRight: 20, cursor: "pointer" }}
            >
              {this.props.displayName}
            </span>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <span
                onClick={() => firebase.auth().signOut()}
                style={{ cursor: "pointer" }}
                className="dropdown-item"
              >
                Logout
              </span>
            </div>
          </div>
        )}
        <span style={{ color: "white" }}>{this.state.currentTime}</span>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  displayName: state.auth.userDetails.displayName,
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(Header);
