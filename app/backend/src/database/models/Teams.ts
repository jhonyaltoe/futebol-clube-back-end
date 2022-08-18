import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Teams extends Model {
  id!: number;
  teamName!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'teams',
});

export default Teams;
