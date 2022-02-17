const express = require('express');
const { Book } = require('../models');

const router = express.Router();

router
  .route('/')
  .get(async (_req, res) => {
    try {
      const books = await Book.findAll()
      return res.status(200).json({ books });

    } catch (err) {
      return res.status(500).json({ error: { code: 500, message: err.message }});
    }
  })
  .post(async (req, res) => {
    try {
      const { title, author, pageQuantity } = req.body;
      const alreadyExists = await Book.findOne({ where: { title, author, pageQuantity } })
      
      if (alreadyExists)
      return res.status(401).json({ error: { code: 401, message: 'Conflict' } })
      
      await Book.create({ title, author, pageQuantity })
      return res.status(201).json({ message: 'OK' });
    } catch (err) {
      return res.status(500).json({ error: { code: 500, message: err.message }});
    }
  })

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findOne({ where: { id } })
  
      if (!book)
        return res.status(404).json({ error: { code: 404, message: 'notFound' }});
  
      return res.status(200).json({ book })

    } catch (err) {
      return res.status(500).json({ error: { code: 500, message: err.message }});
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const { title, author, pageQuantity } = req.body;

      const book = await Book.findOne({ where: { id } })
  
      if (!book)
        return res.status(404).json({ error: { code: 404, message: 'notFound' }});

      await Book.update({ title, author, pageQuantity }, { where: { id } })
      return res.status(200).json({ message: 'OK' })

    } catch (err) {
      return res.status(500).json({ error: { code: 500, message: err.message }});
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const exists = await Book.findOne({ where: { id } })

      if (!exists)
        return res.status(404).json({ error: { code: 404, message: 'notFound' } })

      await Book.destroy({ where: { id } })
      return res.status(204).json({ message: 'OK' })
    } catch (err) {
      return res.status(500).json({ error: { code: 500, message: err.message }});
    }
  })


module.exports = router;
