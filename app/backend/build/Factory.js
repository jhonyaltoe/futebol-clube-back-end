"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const UserRepository_1 = require("./database/repository/UserRepository");
const UserService_1 = require("./services/UserService/UserService");
const UserController_1 = require("./controllers/UserController");
const TeamController_1 = require("./controllers/TeamController");
const TeamRepository_1 = require("./database/repository/TeamRepository");
const TeamService_1 = require("./services/TeamService/TeamService");
const MatcheRepository_1 = require("./database/repository/MatcheRepository");
const MatcheService_1 = require("./services/MatcheService/MatcheService");
const MatcheController_1 = require("./controllers/MatcheController");
const LeaderboardController_1 = require("./controllers/LeaderboardController");
class Factory {
    static user() {
        const userRepository = new UserRepository_1.default();
        const userService = new UserService_1.default(userRepository);
        const userController = new UserController_1.default(userService);
        return userController;
    }
    static team() {
        const teamRepository = new TeamRepository_1.default();
        const teamService = new TeamService_1.default(teamRepository);
        const teamController = new TeamController_1.default(teamService);
        return teamController;
    }
    static matche() {
        const teamRepository = new TeamRepository_1.default();
        const matcheRepository = new MatcheRepository_1.default();
        const matcheService = new MatcheService_1.default(matcheRepository, teamRepository);
        const matcheController = new MatcheController_1.default(matcheService);
        return matcheController;
    }
    static leaderboard() {
        const teamRepository = new TeamRepository_1.default();
        const matcheRepository = new MatcheRepository_1.default();
        const matcheService = new MatcheService_1.default(matcheRepository, teamRepository);
        const leadboard = new utils_1.Leaderboard();
        const leaderboardController = new LeaderboardController_1.default(matcheService, leadboard);
        return leaderboardController;
    }
}
exports.default = Factory;
//# sourceMappingURL=Factory.js.map