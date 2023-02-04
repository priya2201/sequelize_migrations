'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.addColumn('Orders',
'PaymentId',
{
type:Sequelize.INTEGER,
references:{
  model:'Payments',
  key:'id'
},
onUpdate:'CASCADE',
onDelete:'SET NULL'
}
)
  },

  async down (queryInterface, Sequelize) {
await queryInterface.removeColumn('Orders',
'PaymentId'
)
  }
};

