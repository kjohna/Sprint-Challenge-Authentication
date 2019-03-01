import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

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
            <button onClick={ () => {
              localStorage.removeItem('jwt');
              this.props.history.push('/login');
            }}>Log Out</button>
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

export default withRouter(App);
