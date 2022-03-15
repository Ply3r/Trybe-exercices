const { Plan, Patient } = require('../models/index.js');

const findAll = async () => {
  const plans = await Plan.findAll()

  return plans;
}

const findWithPatients = async () => {
  const plans = await Plan.findAll({
    include: { model: Patient, as: 'patients' }
  })

  return plans;
}

module.exports = { findAll, findWithPatients }
