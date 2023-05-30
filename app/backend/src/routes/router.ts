import { Response, Router } from 'express';
import userRouter from './userRouter';
import teamRouter from './teamRouter';
import matcheRouter from './matcheRouter';
import leaderboardRouter from './leaderboardRoute';

const route = Router();

route.get('/', (_, res: Response) => {
  res.status(200)
    .send('Hello Futebol Clube API. Access the route /doc to be redirect to the documentation');
});
route.get('/doc', (_, res: Response) => {
  res.redirect('https://documenter.getpostman.com/view/23798069/2s93m61MYC');
});
route.use(userRouter);
route.use(teamRouter);
route.use(matcheRouter);
route.use(leaderboardRouter);

export default route;
