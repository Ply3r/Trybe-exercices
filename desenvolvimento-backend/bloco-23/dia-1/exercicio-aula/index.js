const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authors = require('./routes/authors.js');
const books = require('./routes/books.js');

const PORT = 3000;
const app = express();
const jsonParser = bodyParser.json();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(jsonParser);
app.use(cors({ origin: '*' }))

app.use(authors);
app.use(books);
