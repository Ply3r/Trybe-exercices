const connection = require('./connection.js');

const updateOne = ({ id, firstName, lastName, email, password }) => {
  const query =
  `
    UPDATE user
    SET 
      first_name = '${firstName}',
      last_name = '${lastName}',
      email = '${email}',
      password = '${password}'
    WHERE
      id = ?
  `

  connection.execute(query, [id])
};

const getById = async (id) => {
  const query = 'SELECT * FROM user WHERE id = ?';
  const [user] = await connection.execute(query, [id]);
  return user;
}

const getAll = async () => {
  const query = 'SELECT * FROM user';
  const [users] = await connection.execute(query);
  return users;
}

const insertOne = (firstName, lastName, email, password) => {
  const query = 
  `
    INSERT INTO user(first_name, last_name, email, password)
    VALUES ('${firstName}', '${lastName}', '${email}', '${password}')
  `;

  connection.execute(query);
}

module.exports = { insertOne, updateOne, getAll, getById };
