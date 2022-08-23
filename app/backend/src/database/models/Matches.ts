import { Model, INTEGER } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: number;
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
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: INTEGER,
    allowNull: false,
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
