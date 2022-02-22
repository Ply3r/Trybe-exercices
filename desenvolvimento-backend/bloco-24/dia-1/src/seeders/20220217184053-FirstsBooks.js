'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const seed = queryInterface.bulkInsert('Books', [
      {
        title: 'Leandrex',
        author: 'Leandro',
        page_quantity: 50,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: '1984',
        author: 'George Orwell',
        page_quantity: 50,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ])
    return seed;
  },

  async down (queryInterface, Sequelize) {
    const seed = queryInterface.bulkDelete('Books')
    return seed
  }
};
