import React from "react";
import logo from "../assets/icons/list.svg";
import moment from "moment";

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
      <nav id={""} className={"navbar navbar-dark bg-dark"}>
        <span className={"navbar-brand"}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          &nbsp; DoOrDie
        </span>
        <span style={{ color: "white" }}>{this.state.currentTime}</span>
      </nav>
    );
  }
}

export default Header;
