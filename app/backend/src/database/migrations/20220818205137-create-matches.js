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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'teams',
          key: 'id',
        },
        field: 'home_team',
      },
      homeTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'home_team_goals',
      },
      awayTeam: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        references: {
          model: 'teams',
          key: 'id',
        },
        field: 'away_team'
      },
      awayTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'away_team_goals',
      },
      inProgress: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'in_progress',
        defaultValue: 1,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};