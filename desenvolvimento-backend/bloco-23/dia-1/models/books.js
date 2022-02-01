const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title FROM books;');
  const [authorName] = await connection.execute(
   'SELECT CONCAT(a.first_name, " ",a.last_name) AS author_name FROM books as b INNER JOIN authors as a ON a.id = b.author_id;'
  )

  const data = books.map((obj, index) => ({ ...obj, ...authorName[index] }));
  return data;
};

const getById = async (id) => {
  const query = 'SELECT id, title FROM books WHERE id = ?;'
  const [book] = await connection.execute(query, [id]);
  const [authorName] = await connection.execute(
    'SELECT CONCAT(a.first_name, " ",a.last_name) AS author_name FROM books as b INNER JOIN authors as a ON a.id = b.author_id;'
  )

  const data = book.map((obj, index) => ({ ...obj, ...authorName[index] }));
  return data;
}

const insertOne = async (title, authorId) => {
  const query = `INSERT INTO model_example.books(title, author_id) VALUES ('${title}', ${authorId})`
  connection.execute(query);
}

module.exports = { getAll, getById, insertOne };