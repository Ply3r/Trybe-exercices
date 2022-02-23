const connection = require('./connection');

const findAll = async () => {
  const query = 'SELECT * FROM login.users';
  const [users] = await connection.execute(query)

  return users;
}

module.exports = { findAll }
