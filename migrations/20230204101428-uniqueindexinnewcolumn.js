'use strict';

const { Query } = require('mongoose');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const transaction=await queryInterface.sequelize.transaction();
try{
  await queryInterface.addColumn(
    'Person',
    'petparent2Name',
    {
      type:Sequelize.DataTypes.STRING
    },
    {
      transaction
    }
  );
  await queryInterface.addIndex(
    'Person',
    'petlastName',
{
  fields: 'petlastName',
  unique:true,
  transaction
}
  );
  await transaction.commit();
}
catch(err){
await transaction.rollback();
throw err;
}
  },

  async down (queryInterface, Sequelize) {
const transaction=await queryInterface.sequelize.transaction();
try{
  await queryInterface.removeColumn('Person',
  'petlastName',
  {
    transaction
  });
  await transaction.commit();
}
catch(err){
  await transaction.rollback();
  throw err;
}
  }
};
