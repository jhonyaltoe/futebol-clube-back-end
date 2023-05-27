"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Team_1 = require("./Team");
class Matche extends sequelize_1.Model {
}
Matche.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    homeTeam: {
        type: sequelize_1.INTEGER,
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
        type: sequelize_1.INTEGER,
        allowNull: false,
        field: 'home_team_goals',
    },
    awayTeam: {
        type: sequelize_1.INTEGER,
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
        type: sequelize_1.INTEGER,
        allowNull: false,
        field: 'away_team_goals',
    },
    inProgress: {
        type: sequelize_1.BOOLEAN,
        allowNull: false,
        field: 'in_progress',
        defaultValue: 1,
    },
}, {
    sequelize: _1.default,
    timestamps: false,
    modelName: 'matches',
});
Matche.belongsTo(Team_1.default, { as: 'teamHome', foreignKey: 'homeTeam' });
Matche.belongsTo(Team_1.default, { as: 'teamAway', foreignKey: 'awayTeam' });
Team_1.default.hasMany(Matche, { as: 'matchHome', foreignKey: 'homeTeam' });
Team_1.default.hasMany(Matche, { as: 'matchAway', foreignKey: 'awayTeam' });
exports.default = Matche;
//# sourceMappingURL=Matche.js.map