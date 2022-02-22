'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employees = queryInterface.createTable('Employees', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
    return employees;
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};
