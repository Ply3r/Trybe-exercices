'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const books = queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'page_quantity'
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
      },
    })

    return books
  },

  async down (queryInterface, Sequelize) {
    const books = queryInterface.dropTable('Books');
    return books;
  }
};
