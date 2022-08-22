import { Router } from 'express';
import userRouter from './userRouter';
import teamRouter from './teamRouter';

const route = Router();

route.use(userRouter);
route.use(teamRouter);

export default route;
