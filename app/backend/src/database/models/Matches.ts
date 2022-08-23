import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
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
    references: {
      model: 'teams',
      key: 'id',
    },
    field: 'home_team',
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id',
    },
    field: 'away_team',
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  // underscored: true,
  timestamps: false,
  modelName: 'matches',
});

Matches.belongsTo(Teams, {
  as: 'teamHome',
  foreignKey: 'homeTeam',
});

Matches.belongsTo(Teams, {
  as: 'teamAway',
  foreignKey: 'awayTeam',
});

Teams.hasMany(Matches, {
  as: 'matchHome',
  foreignKey: 'homeTeam',
});

Teams.hasMany(Matches, {
  as: 'matchAway',
  foreignKey: 'awayTeam',
});

export default Matches;
