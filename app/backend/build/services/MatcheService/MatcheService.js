"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class MatcheService {
    constructor(matcheRepository, teamRepository) {
        this.matcheRepository = matcheRepository;
        this.teamRepository = teamRepository;
    }
    async verifyIfHasTeam(id) {
        const hasTeam = await this.teamRepository.getOne(id);
        if (hasTeam === null)
            (0, utils_1.HandleThrowError)('There is no team with such id!', 404);
    }
    async getAll(where) {
        const matches = await this.matcheRepository.getAll(where);
        return matches;
    }
    async createMatch(matche) {
        const toVerify = [matche.homeTeam, matche.awayTeam];
        await Promise.all(toVerify.map((teamId) => this.verifyIfHasTeam(teamId)));
        const newMatche = await this.matcheRepository.createMatch(matche);
        return newMatche;
    }
    async finishMatch(id) {
        const updatedItemsQtt = await this.matcheRepository.finishMatch(id);
        if (updatedItemsQtt === 0)
            return { status: 304 };
        return { message: 'Finished' };
    }
    async update(id, teamGoals) {
        await this.matcheRepository.update(id, teamGoals);
    }
}
exports.default = MatcheService;
//# sourceMappingURL=MatcheService.js.map