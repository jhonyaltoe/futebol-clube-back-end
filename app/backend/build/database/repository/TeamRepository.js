"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = require("../models/Team");
class TeamRepository {
    constructor() {
        this.teams = Team_1.default;
    }
    async getAll() {
        const teams = await this.teams.findAll();
        return teams;
    }
    async getOne(id) {
        const team = await this.teams.findOne({ where: { id } });
        return team;
    }
}
exports.default = TeamRepository;
//# sourceMappingURL=TeamRepository.js.map