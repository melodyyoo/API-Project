'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'},
        onDelete:'cascade'
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false
      },
      city: {
        type: Sequelize.STRING,
        allowNull:false
      },
      state: {
        type: Sequelize.STRING,
        allowNull:false
      },
      country: {
        type: Sequelize.STRING,
        allowNull:false
      },
      lat: {
        type: Sequelize.DECIMAL(10,7)
      },
      lng: {
        type: Sequelize.DECIMAL(10,7)
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull:false
      },
      description: {
        type: Sequelize.STRING(600),
        allowNull:false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots'
    await queryInterface.dropTable(options);
  }
};
