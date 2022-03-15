const express = require('express');
const router = express.Router();

const Plan = require('../services/Plan');

router
  .route('/')
  .get(async (_req, res, next) => {
    try {
      const patients = await Plan.findAll();

      return res.status(200).json(patients)
    } catch (err) {
      next(err)
    }
  })

router
  .route('/patient')
  .get(async (_req, res, next) => {
    try {
      const patients = await Plan.findWithPatients();

      return res.status(200).json(patients)
    } catch (err) {
      next(err)
    }
  })

module.exports = router;
