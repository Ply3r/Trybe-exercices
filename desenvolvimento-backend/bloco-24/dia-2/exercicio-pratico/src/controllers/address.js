const express = require('express')
const { Address } = require('../models');
const router = express.Router();

router
  .route('/')
  .get(async (_req, res, next) => {
    try {
      const addresses = await Address.findAll();

      return res.status(200).json({ Addresses: addresses })
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const { city, street, number, employeeId } = req.body;

      const address = await Address.findOne({ where: { city, street, number, employeeId } })

      if (address) {
        return res.status(401).json({ error: { code: 401, message: 'Conflict' } })
      }

      const { dataValues: { id } } = await Address.create({ city, street, number, employeeId });
      return res.status(201).json({ Adress: { id, city, street, number, employeeId } })
    } catch (err) {
      next(err);
    }
  })

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;

      const address = await Address.findOne({ where: { id } });

      if (!address) {
        return res.status(200).json({ Address: [] })
      }

      return res.status(200).json({ Address: [address] })
    } catch (err) {
      next(err);
    }
  })

module.exports = router;