import { Router } from 'express';
import Factory from '../Factory';

const teamRouter = Router();

const teamController = Factory.team();

teamRouter.get('/teams', teamController.getAll);

export default teamRouter;
