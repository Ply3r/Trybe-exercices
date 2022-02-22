const Address = (Sequelize, DataTypes) => {
  const Address = Sequelize.define('Address', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,

  }, {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true
  })

  Address.associate = (models) => {
    Address.belongsTo(models.Employee, { foreignKey: 'employee_id', as: 'employee' })
  }

  return Address;
}

module.exports = Address;
