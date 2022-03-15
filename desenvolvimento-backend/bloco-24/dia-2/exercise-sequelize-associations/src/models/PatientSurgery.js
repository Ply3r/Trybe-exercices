const PatientSurgery = (Sequelize, DataTypes) => {
  const PatientSurgery = Sequelize.define('PatientSurgery', 
  {  }, 
  {
    timestamps: false,
    tableName: 'Patient_surgeries'
  })

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, { 
      through: PatientSurgery, 
      as: 'surgeries', 
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    })
    models.Surgery.belongsToMany(models.Patient, { 
      through: PatientSurgery, 
      as: 'patients', 
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    })
  }

  return PatientSurgery
}

module.exports = PatientSurgery
