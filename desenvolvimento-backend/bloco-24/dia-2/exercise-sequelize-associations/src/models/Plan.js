const Plan = (Sequelize, DataTypes) => {
  const Plan = Sequelize.define('Plan', {
    plan_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'Plans'
  })

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, { foreignKey: 'plan_id', as: 'patients' })
  }

  return Plan;
}

module.exports = Plan
