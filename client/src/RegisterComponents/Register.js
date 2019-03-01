import React from 'react';
import api from '../api/api';

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword){
      api.post('/register', {
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          localStorage.setItem('jwt', res.data.token);
          this.props.history.push('/jokes');
        })
        .catch( err => console.error(err));
    } else {
      alert("Passwords do not match!");
    }
  }

  render() {
    return (
      <>
      <h2>Register</h2>
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
          <label htmlFor="confirmPassword"/>
          <input
            name="confirmPassword"
            id="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.onChange}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      </>
    );
  }
}

export default Register;