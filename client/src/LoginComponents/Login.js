import React from 'react';
import api from '../api/api';

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit = e => {
    e.preventDefault();

    api.post('/login', this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch( err => console.error(err));
  }

  render() {
    return (
      <>
      <h2>Log In</h2>
      <form onSubmit={this.onSubmit} autoComplete="off">
        <div>
          <label htmlFor="username"/>
          <input
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.onChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password"/>
          <input
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.onChange}
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