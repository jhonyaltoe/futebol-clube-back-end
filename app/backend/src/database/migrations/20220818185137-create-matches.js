'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeam: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      homeTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeam: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      inProgress: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};