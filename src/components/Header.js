import React from "react";
import logo from "../assets/icons/list.svg";

export default () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    class="d-inline-block align-top"
                    alt=""
                />
                &nbsp; DoOrDie
            </span>
        </nav>
    );
};
