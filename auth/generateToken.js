const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'bad secret';

module.exports = {
  generateToken,
};

function generateToken(userData) {
  const payload = {
    subject: userData.id,
    username: userData.username,
    departments: userData.departments,
  };

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret, options);
}