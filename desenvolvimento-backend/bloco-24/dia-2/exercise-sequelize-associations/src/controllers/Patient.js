const express = require('express');
const router = express.Router();

const Patient = require('../services/Patient');

router
  .route('/')
  .get(async (_req, res, next) => {
    try {
      const patients = await Patient.findAll();

      return res.status(200).json(patients)
    } catch (err) {
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const { fullname, plan, price } = req.body;

      const patient = await Patient.create({ fullname, plan, price });

      return res.status(200).json(patient)
    } catch (err) {
      next(err)
    }
  })

router
  .route('/plan')
  .get(async (_req, res, next) => {
    try {
      const patients = await Patient.findAllWithPlan();

      return res.status(200).json(patients)
    } catch (err) {
      next(err)
    }
  })

router
  .route('/surgeries')
  .get(async (req, res, next) => {
    try {
      const { includeDoctor, doctor } = req.query;
      const patients = await Patient.findAllWithSurgeries({ includeDoctor, doctor });

      return res.status(200).json(patients);
    } catch (err) {
      next(err)
    }
  })

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const { id } = req.params
      const patient = await Patient.findOne(+id);

      return res.status(200).json(patient)
    } catch (err) {
      next(err)
    }
  })

module.exports = router;
