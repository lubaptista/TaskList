'use strict';

const { SELECT } = require('sequelize/lib/query-types');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        task: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        check: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
