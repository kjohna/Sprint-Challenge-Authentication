import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Login from './LoginComponents/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">Log In</NavLink>
            &nbsp;|&nbsp;
          </nav>
        </header>
        <main>
          <Route path="/login" component={Login} />
        </main>
      </div>
    );
  }
}

export default App;
