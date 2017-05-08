import React, { Component } from 'react';
import {UsernameField, PasswordField} from './LoginFields.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="login-container">
          <div className="login">
            <div className="username">
              <UsernameField />
            </div>
            <div className="password">
              <PasswordField />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
