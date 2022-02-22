const { Employee } = require('../models');

const exists = async (filter) => {
  const employee = await Employee.findOne({ where: filter });

  if (employee)
    return [employee]

  return []
}

module.exports = exists;
