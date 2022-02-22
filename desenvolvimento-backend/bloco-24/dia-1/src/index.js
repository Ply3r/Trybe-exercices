const express = require('express');
const books = require('./controllers/books.js')

const PORT = 3000;
const app = express();

app.listen(PORT, () => console.log(`Running on ${PORT}`));

app.use(express.json());
app.use('/book', books);



