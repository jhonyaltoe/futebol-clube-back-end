"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeamService {
    constructor(team) {
        this.team = team;
    }
    async getAll() {
        const teams = await this.team.getAll();
        return teams;
    }
    async getOne(id) {
        const team = await this.team.getOne(id);
        return team;
    }
}
exports.default = TeamService;
//# sourceMappingURL=TeamService.js.map