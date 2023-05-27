"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matche_1 = require("../models/Matche");
const Team_1 = require("../models/Team");
class MatcheRepository {
    constructor() {
        this.matcheModel = Matche_1.default;
        this.teamModel = Team_1.default;
    }
    async getAll(where) {
        const matches = await this.matcheModel.findAll({
            include: [
                { model: this.teamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
                { model: this.teamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
            ],
            where: { ...where },
            raw: true,
            nest: true,
        });
        return matches;
    }
    async createMatch(matche) {
        const newMatche = await this.matcheModel.create({ ...matche });
        return newMatche;
    }
    async finishMatch(id) {
        const [updatedItemsQtt] = await this.matcheModel.update({ inProgress: 0 }, { where: { id } });
        return updatedItemsQtt;
    }
    async update(id, teamGoals) {
        const { homeTeamGoals, awayTeamGoals } = teamGoals;
        await this.matcheModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    }
}
exports.default = MatcheRepository;
//# sourceMappingURL=MatcheRepository.js.map