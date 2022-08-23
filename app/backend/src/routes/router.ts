import { Router } from 'express';
import userRouter from './userRouter';
import teamRouter from './teamRouter';
import matcheRouter from './matcheRouter';

const route = Router();

route.use(userRouter);
route.use(teamRouter);
route.use(matcheRouter);

export default route;
