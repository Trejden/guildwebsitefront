import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    };
  render() {
      const childProps = {
          isAuthenticated: this.state.isAuthenticated,
          userHasAuthenticated: this.userHasAuthenticated
      };
    return (
      <div className="App">
        <header className="App-header">
          <img src="tpglogo.ico" className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
