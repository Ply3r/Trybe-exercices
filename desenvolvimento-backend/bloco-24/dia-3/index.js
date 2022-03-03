const express = require('express');
const login = require('./src/controllers/login.js');
const users = require('./src/controllers/users.js')
const error = require('./src/middlewares/error.js');
require('dotenv').config();

const PORT = 3000;
const app = express();

app.listen(PORT, () => console.log(`PORT: ${PORT}`));

app.use(express.json());
app.use('/login', login);
app.use('/users', users);

app.use(error)
