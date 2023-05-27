import { Response, Router } from 'express';
import userRouter from './userRouter';
import teamRouter from './teamRouter';
import matcheRouter from './matcheRouter';
import leaderboardRouter from './leaderboardRoute';

const route = Router();

route.get('/', (_, res: Response) => res.status(200).send('Hello Futebol Clube API'));
route.use(userRouter);
route.use(teamRouter);
route.use(matcheRouter);
route.use(leaderboardRouter);

export default route;
