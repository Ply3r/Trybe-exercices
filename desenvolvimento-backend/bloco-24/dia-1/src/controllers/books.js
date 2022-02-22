const express = require('express');
const { Book } = require('../models');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const { verifyIfExists } = require('../services/books.js');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    try {

      const { author, side, order } = req.query;

      if (author) { 
        const books = await Book.findAll({ 
          where: { author: { [Op.like]: `%${author}%` } },
          order: [[`${order ? order : 'title'}`, `${side ? side : 'ASC'}`]]
        })

        return res.status(200).json({ books })
      }

      const books = await Book.findAll({ order: [[`${order ? order : 'title'}`, `${side ? side : 'ASC'}`]] })
      return res.status(200).json({ books });

      
    } catch (err) {

      return res.status(400).json({ error: { code: 400, message: err.message } })

    }
    
  })
  .post(async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    
    const exists = await verifyIfExists({ title, author, pageQuantity });
    if (exists.message === 'OK')
      return res.status(401).json({ message: 'Conflict' });

    await Book.create({ title, author, pageQuantity })
    return res.status(201).json({ message: 'OK' });
  })

router
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const { book, message } = await verifyIfExists({ id });

    if (message !== 'OK')
      return res.status(404).json({ error: { code: 404, message }});

    return res.status(200).json({ book })
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const { message } = await verifyIfExists({ title, author, pageQuantity });
    if (message !== 'OK')
      return res.status(404).json({ error: { code: 404, message }});

    await Book.update({ title, author, pageQuantity }, { where: { id } })
    return res.status(200).json({ message })
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const { message } = await verifyIfExists({ id });

    if (message !== 'OK')
      return res.status(404).json({ error: { code: 404, message } })

    await Book.destroy({ where: { id } })
    return res.status(204).json({ message: 'OK' })
  })


module.exports = router;
