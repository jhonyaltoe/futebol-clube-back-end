import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './Team';

class Matche extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Matche.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
    defaultValue: 1,
  },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'matches',
});

Matche.belongsTo(Team, { as: 'teamHome', foreignKey: 'homeTeam' });
Matche.belongsTo(Team, { as: 'teamAway', foreignKey: 'awayTeam' });
Team.hasMany(Matche, { as: 'matchHome', foreignKey: 'homeTeam' });
Team.hasMany(Matche, { as: 'matchAway', foreignKey: 'awayTeam' });

export default Matche;
