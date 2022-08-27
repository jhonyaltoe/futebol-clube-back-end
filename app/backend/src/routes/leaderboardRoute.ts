import { Router } from 'express';
import Factory from '../Factory';

const leaderboardRouter = Router();
const leaderboardController = Factory.leaderboard();

leaderboardRouter.get('/leaderboard/home', leaderboardController.homeTeamboard);
leaderboardRouter.get('/leaderboard/away', leaderboardController.awayTeamboard);

export default leaderboardRouter;
