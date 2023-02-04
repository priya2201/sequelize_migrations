'use strict';

const { Query } = require('mongoose');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
return queryInterface.createTable(
  'Person',
  {
    name:Sequelize.DataTypes.STRING,
    isBetaMember:{
      type:Sequelize.DataTypes.BOOLEAN,
      defaultValue:false,
      allowNull:false
    }
  }
)
  },

  async down (queryInterface, Sequelize) {
await queryInterface.dropTable('Person')
  }
};