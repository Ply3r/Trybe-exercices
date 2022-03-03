const connection = require('./connection.js');

const findOne = async (params) => {
  const { username, password } = params;

  const query = 'SELECT * FROM login.users WHERE username = ? AND password = ?';
  const [user] = await connection.execute(query, [username, password]);

  return user
}

const inserUser = async (params) => {
  const { username, password } = params;

  const query = 'INSERT INTO login.users (username, password) VALUES (?, ?)'
  const [result] = await connection.execute(query, [username, password])

  return { id: result.insertId, username, password }
}

module.exports = { findOne, inserUser };
