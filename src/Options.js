import React, { Component } from "react";
import Login from "./Login.js";
import {NavLink} from "react-router-dom";

class Options extends Component {
    render() {
        return (
        <div>
            <div>
                <h1>Login Options</h1>
                <p class="lead">Here You can choose to either log-in or sign-up</p>
                <NavLink to="/Login" class="btn btn-default">Login</NavLink>
                <NavLink to="/signup" class="btn btn-default">Sign-up</NavLink>
            </div>
        </div>
    );
    }
}

export default Options;