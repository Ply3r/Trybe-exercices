const Employee = (Sequelize, DataTypes) => {
  const Employee = Sequelize.define('Employee', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'Employees',
    underscored: true
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Address, { foreignKey: 'employee_id', as: 'addresses' })
  }


  return Employee;
}

module.exports = Employee;
