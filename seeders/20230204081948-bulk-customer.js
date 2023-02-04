'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Customers',
[
{
customerName:'siya',
customerPhone:9900998877,
createdAt:new Date(),
  updatedAt:new Date()
},
{
  customerName:'vina',
  customerPhone:7788990066,
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  customerName:'tushi',
  customerPhone:9900887766,
  createdAt:new Date(),
  updatedAt:new Date()
}])
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Customers',null,{})
  }
};
