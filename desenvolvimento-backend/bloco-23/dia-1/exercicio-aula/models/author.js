const connection = require('./connection.js');

const serialize = ({ first_name: firstName, middle_name: middleName, last_name: lastName }) => ({
  firstName,
  middleName,
  lastName
});

const filterNull = ({ firstName, middleName, lastName }) => {
  const newData = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ')
  return newData;
}

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT first_name, middle_name, last_name FROM model_example.authors;'
  );

  const data = authors
    .map(serialize)
    .map(filterNull);
  return data;
}

const getById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?;'
  const [author] = await connection.execute(query, [id]);

  const data = author.map(serialize).map(filterNull);
  return data;
}

module.exports = { getAll, getById };
