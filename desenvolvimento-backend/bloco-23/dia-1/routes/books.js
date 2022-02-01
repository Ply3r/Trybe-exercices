const express = require('express');
const books = require('../models/books');

const route = express.Router();

route.post('/book', async (req, res) => {
  const { title, authorId } = req.body;

  if (!title || !authorId)
    return res.status(401).json({ message: 'invalid insertion!' })

  books.insertOne(title, authorId);
  res
    .status(200)
    .json({ message: 'OK' })
})

route.get('/books', async (_req, res) => {
  const data = await books.getAll();

  res
    .status(200)
    .json({ data });
})

route.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  const data = await books.getById(id);

  res
    .status(200)
    .json({ data });
})

module.exports = route
