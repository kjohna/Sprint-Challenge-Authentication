const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'bad secret';
// console.log(secret); // only use to check that secret is coming from .env
module.exports = {
  generateToken,
};

function generateToken(userData) {
  const payload = {
    subject: userData.id,
    username: userData.username,
  };

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret, options);
}