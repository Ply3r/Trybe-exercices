'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const addresses = queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        field: 'employee_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Employees',
          key: 'id'
        },
      }
    })
    return addresses;
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses')
  }
};
