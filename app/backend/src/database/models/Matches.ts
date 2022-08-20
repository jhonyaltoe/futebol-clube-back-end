import { Model, INTEGER } from 'sequelize';
import db from '.';

class Matches extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
    // field: 'home_team',
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
    // field: 'home_team_goals',
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
    // field: 'away_team',
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
    // field: 'away_team_goals',
  },
  inProgress: {
    type: INTEGER,
    allowNull: false,
    // field: 'in_progress',
  },
}, {
  sequelize: db,
  // underscored: true,
  timestamps: false,
  // modelName: 'matches',
});

export default Matches;
