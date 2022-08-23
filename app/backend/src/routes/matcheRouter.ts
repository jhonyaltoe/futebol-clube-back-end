import { Router } from 'express';
import Factory from '../Factory';

const matcheRouter = Router();

const matcheController = Factory.matche();

matcheRouter.get('/matches', matcheController.getAll);

export default matcheRouter;
