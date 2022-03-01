const mysql = require('mysql2/promise');

const connect = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'model_example'
})

module.exports = connect;