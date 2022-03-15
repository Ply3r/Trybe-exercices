const Patient = (Sequelize, DataTypes) => {
  const Patient = Sequelize.define('Patient', {
    patient_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.STRING
    },
    fullname: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'Patients'
  })

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' })
    Patient.hasMany(models.PatientSurgery, { foreignKey: 'patient_id', as: 'patient' })
  }

  return Patient
}

module.exports = Patient
