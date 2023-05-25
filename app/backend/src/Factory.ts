import { Leaderboard } from './utils';

import UserRepository from './database/repository/UserRepository';
import UserService from './services/UserService/UserService';
import UserController from './controllers/UserController';

import TeamController from './controllers/TeamController';
import TeamRepository from './database/repository/TeamRepository';
import TeamService from './services/TeamService/TeamService';

import MatcheRepository from './database/repository/MatcheRepository';
import MatcheService from './services/MatcheService/MatcheService';
import MatcheController from './controllers/MatcheController';

import LeaderboardController from './controllers/LeaderboardController';

export default class Factory {
  public static user() {
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    return userController;
  }

  public static team() {
    const teamRepository = new TeamRepository();
    const teamService = new TeamService(teamRepository);
    const teamController = new TeamController(teamService);
    return teamController;
  }

  public static matche() {
    const teamRepository = new TeamRepository();
    const matcheRepository = new MatcheRepository();
    const matcheService = new MatcheService(matcheRepository, teamRepository);
    const matcheController = new MatcheController(matcheService);
    return matcheController;
  }

  public static leaderboard() {
    const teamRepository = new TeamRepository();
    const matcheRepository = new MatcheRepository();
    const matcheService = new MatcheService(matcheRepository, teamRepository);
    const leadboard = new Leaderboard();
    const leaderboardController = new LeaderboardController(matcheService, leadboard);
    return leaderboardController;
  }
}
