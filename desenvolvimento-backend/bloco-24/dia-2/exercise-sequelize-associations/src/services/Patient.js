const Sequelize = require('sequelize');
const { Patient, Plan, Surgery } = require('../models/index.js')

const Op = Sequelize.Op;

const findAll = async () => {
  const patients= await Patient.findAll();

  return patients;
}

const findOne = async (id) => {
  const patients= await Patient.findOne({ where: { patient_id: id } });

  return patients;
}

const findAllWithPlan = async () => {
  const patients= await Patient.findAll({
    include: { model: Plan, as: 'plan' }
  });

  return patients;
}

const findAllWithSurgeries = async ({ includeDoctor, doctor }) => {

  if (!includeDoctor && !doctor) {
    const patients = await Patient.findAll({
      include: [{ 
        model: Surgery, 
        as: 'surgeries', 
        attributes: { exclude: ['surgery_id', 'doctor'] },
      }]
    })

    return patients;
  }

  const doctorName = doctor && doctor.replaceAll('%20', ' ');

  const patients = await Patient.findAll({
    include: [{ 
      model: Surgery, 
      as: 'surgeries', 
      attributes: { exclude: ['surgery_id', `${!includeDoctor && 'doctor'}`] },
      where: { 
        doctor: { [Op.like]: `${doctor ? `%${doctorName}%` : '%%'}` }
      }
    }]
  })

  return patients
}

const create = async (data) => {
  const { fullname, plan, price } = data;

  const planExists = await Plan.findOne({ where: { coverage: plan } })

  if (!planExists) {
    const { dataValues: { plan_id } } = await Plan.create({ coverage: plan, price });
    const newPatient = await Patient.create({ fullname, plan_id });

    return newPatient
  }

  const newPatient = await Patient.create({ fullname, plan_id: planExists.dataValues.plan_id });

  return newPatient;
}

module.exports = { findAll, findOne, create, findAllWithPlan, findAllWithSurgeries }
