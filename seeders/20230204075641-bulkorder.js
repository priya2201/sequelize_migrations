'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Orders',[{
  status:'packed',
  invoiceNumber:'select',
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  status:'shipping',
  invoiceNumber:'reject',
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  status:'tracking',
  invoiceNumber:'select',
  createdAt:new Date(),
  updatedAt:new Date()
}])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete
    ('Orders',null,{});
  }
};
