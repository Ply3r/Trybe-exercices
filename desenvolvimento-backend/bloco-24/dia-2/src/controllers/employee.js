const express = require('express');
const { Employee, Address } = require('../models');
const exists = require('../services/employee');

const router = express.Router();

router
  .route('/')
  .get(async (_req, res, next) => {
    try {
      const Employees = await Employee.findAll({
        include: { model: Address, as: 'addresses' }
      });

      return res.status(200).json({ Employees });
    } catch (err) {
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const { firstName, lastName, age } = req.body;

      const hold = await exists({ firstName, lastName, age });
      
      if (hold.length) {
        return res.status(401).json({ error: { code: 401, message: 'User already exists!' } })
      }

      const { dataValues: { id } } = await Employee.create({ firstName, lastName, age });

      return res.status(201).json({ Employee: [{ id, firstName, lastName, age }]})
    } catch (err) {
      next(err)
    }
  })


router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;
      const employee = await Employee.findOne({ where: { id }, include: { model: Address, as: 'addresses' } });

      if (!employee) {
        return res.status(200).json({ Employee: [] })
      }

      return res.status(200).json({ Employee: [employee] });
    } catch (err) {
      next(err)
    }
  })
  .put(async (req, res, next) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, age } = req.body;

      const hold = await exists({ id })
      if (!hold.length) { 
        return res.status(404).json({ error: { code: 404, message: 'Employee not found' } });
      }

      await Employee.update({ firstName, lastName, age }, { where: { id } });
      return res.status(200).json({ Employee: [{ id, firstName, lastName, age }] })
    } catch (err) {
      next(err)
    }
  })

module.exports = router
