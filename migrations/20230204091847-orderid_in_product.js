'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.addColumn('Products',
'OrderId',
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
await queryInterface.removeColumn('Products',
'OrderId')
  }
};
