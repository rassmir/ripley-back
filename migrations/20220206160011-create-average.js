'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Averages', {
      avg: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{timestamps: false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Averages');
  }
};