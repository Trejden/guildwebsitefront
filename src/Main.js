import React, { Component } from "react";
import TPGBanner from './TPGBanner.png';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Dailies from "./Dailies";
import StatusBoard from "./StatusBoard";
import Options from "./Options";
import Login from "./Login.js";
import signup from "./signup.js";
import Profile from "./Profile";
import UpdateStatus from "./UpdateStatus";

localStorage.setItem("Authenticated", "false");

class Main extends Component {
    constructor(){
        super();
    }
    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    };
    render() {
        if(localStorage.getItem("Authenticated")=="false") {
            console.log("unauthenticated user");
            return (
                <HashRouter>
                    <div>
                        <img src={TPGBanner}/>
                        <h1 className="content">TPG Website</h1>
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/Dailies">Dailies</NavLink></li>
                            <li><NavLink to="/StatusBoard">Status Board</NavLink></li>
                            <li><NavLink to="/Options">Login Options</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/Dailies" component={Dailies}/>
                            <Route path="/StatusBoard" component={StatusBoard}/>
                            <Route path="/Options" component={Options}/>
                            <Route path="/Login" component={Login}/>
                            <Route path="/signup" component={signup}/>
                        </div>
                    </div>
                </HashRouter>
            );
        } else {
            console.log("authenticated user");
            return (
                <HashRouter>
                    <div>
                        <img src={TPGBanner}/>
                        <h1 className="content">TPG Website</h1>
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/Dailies">Dailies</NavLink></li>
                            <li><NavLink to="/StatusBoard">Status Board</NavLink></li>
                            <li><NavLink to="/Profile">Profile</NavLink></li>
                            <li><NavLink to="/UpdateStatus">Update Status</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/Dailies" component={Dailies}/>
                            <Route path="/StatusBoard" component={StatusBoard}/>
                            <Route path="/Options" component={Options}/>
                            <Route path="/Profile" component={Profile}/>
                            <Route path="/UpdateStatus" component={UpdateStatus} />
                        </div>
                    </div>
                </HashRouter>
            )
        }
    }
}

export default Main;