import React from 'react';
import api from '../api/api';

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  }

  render() {
    return (
      <>
      <h2>Log In</h2>
      <form onSubmit={""} autoComplete="off">
        <div>
          <label htmlFor="username"/>
          <input
            name="username"
            id="username"
            value={this.state.username}
            onChange={""}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password"/>
          <input
            name="password"
            id="password"
            value={this.state.password}
            onChange={""}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
      </>
    );
  }
}

export default Login;