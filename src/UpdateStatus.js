import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import fetch from 'isomorphic-fetch';


class UpdateStatus extends Component {

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
                                <label>Tavern</label>
                                <input type="text"
                                       rows="5"
                                       class="form-control"
                                       name="tavern" />
                            </div>
                            <div class="form-group">
                                <label>Mine</label>
                                <input type="text"
                                       rows="5"
                                       class="form-control"
                                       name="mine" />
                            </div>
                            <div className="form-group">
                                <label>Workshop</label>
                                <input type="text"
                                       rows="5"
                                       className="form-control"
                                       name="workshop"/>
                            </div>
                            <div className="form-group">
                                <label>War Room</label>
                                <input type="text"
                                       rows="5"
                                       className="form-control"
                                       name="warroom"/>
                            </div>
                            <div className="form-group">
                                <label>Market</label>
                                <input type="text"
                                       rows="5"
                                       className="form-control"
                                       name="market"/>
                            </div>
                            <div className="form-group">
                                <label>Arena</label>
                                <input type="text"
                                       rows="5"
                                       className="form-control"
                                       name="arena"/>
                            </div>
                            <div>
                                <input type="submit" class="form-control" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default UpdateStatus;