import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import fetch from 'isomorphic-fetch';


class Login extends Component {

    constructor() {
        super();
        //this.state = initialstate;
        //this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:3001/login',{
            method: 'POST',
            body: data,
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                localStorage.setItem("Authenticated", "true");
                //this.props.userHasAuthenticated(true);
                this.props.history.push("/");
            } else {
                console.log('Something happened wrong');
            }
        }).catch(err => err);

    }

    render() {
        return (
            <div>
                <div className="content">
                    <div>
                        <h1>Login</h1>

                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" name="email" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" />
                            </div>
                            <div>
                                <input type="submit" class="form-control" value="Submit" />
                            </div>
                        </form>
                    </div>
                        <h2>Don't have an account?
                            <NavLink to="/signup" class="btn btn-default">Sign-up</NavLink>
                        </h2>
                </div>
            </div>
        );
    }
}

Login.defaultProps = {
    action: 'http://localhost:3001/login',
    method: 'post'
};

export default Login;