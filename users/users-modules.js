const db = require('../database/dbConfig.js');

module.exports = {
  addUser,
}

async function addUser(userData) {
  try {
    const [id] = await db('users').insert(userData);
    return id;
  } catch (error) {
    throw error;
  }
};