const express = require('express');
const authors = require('../models/author.js');

const route = express.Router();

route.get('/authors', async (_req, res) => {
  const data = await authors.getAll();
  res
    .status(200)
    .json({ data });
})

route.get('/author/:id', async (req, res) => {
  const { id } = req.params;

  const data = await authors.getById(id);
  res
    .status(200)
    .json({ data });
})

module.exports = route;
