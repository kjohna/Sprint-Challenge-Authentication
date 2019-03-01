import React from 'react';
import api from '../api/api';

import requiresAuth from '../auth/requiresAuth';

class Jokes extends React.Component {
  state = {
    jokes: []
  }

  componentDidMount() {
    api.get('/jokes')
      .then(res => {
        console.log(res.data);
        this.setState({ jokes: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const jokesFormatted = this.state.jokes.map(joke => {
      return(
        <li key={joke.id}>
          <h4>{joke.joke}</h4>
        </li>
      );
    });
    return(
      <>
        <h2>DAD JOKES</h2>
        <ul>
          {jokesFormatted}
        </ul>
      </>
    );
  }
}

export default requiresAuth(Jokes);