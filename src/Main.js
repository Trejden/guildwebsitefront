import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Dailies from "./Dailies";
import StatusBoard from "./StatusBoard";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>TPG Website</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/Dailies">Dailies</NavLink></li>
                        <li><NavLink to="/StatusBoard">Status Board</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Dailies" component={Dailies}/>
                        <Route path="/StatusBoard" component={StatusBoard}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;