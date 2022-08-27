import { Router } from 'express';
import Factory from '../Factory';

const leaderboardRouter = Router();
const leaderboardController = Factory.leaderboard();

leaderboardRouter.get('/leaderboard/home', leaderboardController.homeTeamboard);

export default leaderboardRouter;
