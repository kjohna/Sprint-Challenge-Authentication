const axios = require('axios');
const bcrypt = require('bcryptjs');

const Users = require('../users/users-modules.js');

const { authenticate } = require('../auth/authenticate');

const errors = {
  '19': 'Username taken, pick a different one.'
}

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  const userData = req.body;

  if (userData.username && userData.password) {
    const hash = bcrypt.hashSync(userData.password, 4);
    userData.password = hash;

    try {
      const userId = await Users.addUser(userData);
      res.status(201).json({ userId });
    } catch (error) {
      const msg = errors[error.errno] || error;
      res.status(500).json({ msg });
    }
  } else {
    res.status(400).json({ message: "Please provide username and password."});
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
