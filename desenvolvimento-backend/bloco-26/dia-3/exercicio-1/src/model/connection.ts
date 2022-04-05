import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'LeandroH123',
  database: 'exercicio'
});

export default connection;