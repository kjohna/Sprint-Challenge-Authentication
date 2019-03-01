const axios = require('axios');
const bcrypt = require('bcryptjs');

const Users = require('../users/users-modules.js');

const { authenticate } = require('../auth/authenticate');
const { generateToken } = require('../auth/generateToken');

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
      await Users.addUser(userData);
      const token = generateToken(userData);
      res.status(200).json({
        message: `Welcome, ${userData.username}`,
        token,
      });
    } catch (error) {
      const msg = errors[error.errno] || error;
      res.status(500).json({ msg });
    }
  } else {
    res.status(400).json({ message: "Please provide username and password."});
  }
}

async function login(req, res) {
  // implement user login
  const { username, password } = req.body;

  try {
    const userData = await Users.findUserBy({ username });
    if (userData && bcrypt.compareSync(password, userData.password)){
      const token = generateToken(userData);
      res.status(200).json({
        message: `Welcome, ${userData.username}`,
        token,
      });
    } else {
      res.status(401).json({ message: "Wrong username or password." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
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
