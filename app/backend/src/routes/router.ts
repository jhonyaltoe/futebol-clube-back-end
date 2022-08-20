import { Router } from 'express';
import userRouter from './userRouter';

const route = Router();

route.use(userRouter);

export default route;
