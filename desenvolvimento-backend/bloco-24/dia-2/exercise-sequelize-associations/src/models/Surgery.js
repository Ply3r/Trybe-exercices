const Surgery = (Sequelize, DataTypes) => {
  const Surgery = Sequelize.define('Surgery', {
    surgery_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.STRING
    },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'Surgeries'
  })

  Surgery.associate = (models) => {
    Surgery.hasMany(models.PatientSurgery, { foreignKey: 'surgery_id', as: 'surgeries' })
  }

  return Surgery;
};

module.exports = Surgery;
