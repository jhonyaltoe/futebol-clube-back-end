"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Factory_1 = require("../Factory");
const leaderboardRouter = (0, express_1.Router)();
const leaderboardController = Factory_1.default.leaderboard();
leaderboardRouter.get('/leaderboard/home', leaderboardController.homeTeamboard);
leaderboardRouter.get('/leaderboard/away', leaderboardController.awayTeamboard);
leaderboardRouter.get('/leaderboard', leaderboardController.bothTeamboard);
exports.default = leaderboardRouter;
//# sourceMappingURL=leaderboardRoute.js.map