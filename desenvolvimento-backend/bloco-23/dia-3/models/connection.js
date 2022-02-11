const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rest_exercicios'
});

module.exports = connection;
