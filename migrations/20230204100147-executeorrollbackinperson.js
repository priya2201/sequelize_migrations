'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return  queryInterface.sequelize.transaction(t=>{
      return  Promise.all([
         queryInterface.addColumn('Person',
        'petname',
        {
          type:Sequelize.DataTypes.STRING
        },
        {
          transaction:t
        }),
         queryInterface.addColumn('Person',
        'favoriteColor',
        {
          type:Sequelize.DataTypes.STRING
        },
        {
          transaction:t
        })
      ])
    })

  },

  async down (queryInterface, Sequelize) {
return queryInterface.sequelize.transaction(t=>{
return Promise.all([
  queryInterface.removeColumn('Person','petName',{transaction:t}),
  queryInterface.removeColumn('Person','favoriteColor',{transaction:t})

])
})
  }
};
