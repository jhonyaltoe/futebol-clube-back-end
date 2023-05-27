"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class LeaderboardController {
    constructor(matcheService, leaderboard) {
        this.matcheService = matcheService;
        this.leaderboard = leaderboard;
        this.homeTeamboard = (0, utils_1.controllerWrapper)(async (_req, res) => {
            const matches = await this.matcheService.getAll({ inProgress: false });
            const orded = this.leaderboard.generate(matches, 'homeTeam');
            res.status(200).json(orded);
        });
        this.awayTeamboard = (0, utils_1.controllerWrapper)(async (_req, res) => {
            const matches = await this.matcheService.getAll({ inProgress: false });
            const orded = this.leaderboard.generate(matches, 'awayTeam');
            res.status(200).json(orded);
        });
        this.bothTeamboard = (0, utils_1.controllerWrapper)(async (_req, res) => {
            const matches = await this.matcheService.getAll({ inProgress: false });
            const both = this.leaderboard.bothLeaderboards(matches);
            res.status(200).json(both);
        });
    }
}
exports.default = LeaderboardController;
//# sourceMappingURL=LeaderboardController.js.map