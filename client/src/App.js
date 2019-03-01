import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Login from './LoginComponents/Login';
import Register from './RegisterComponents/Register';
import Jokes from './JokesComponents/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">Log In</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/register">Register</NavLink>
            &nbsp;|&nbsp;
          </nav>
        </header>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </div>
    );
  }
}

export default App;
