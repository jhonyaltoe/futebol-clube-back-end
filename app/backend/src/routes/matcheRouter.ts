import { Router } from 'express';
import Factory from '../Factory';
import { Aunth, Validations } from '../middlewares';

const matcheRouter = Router();
const matcheController = Factory.matche();

matcheRouter.get('/matches', matcheController.getAll);
matcheRouter.post(
  '/matches',
  Aunth.tokenJWT,
  Validations.createMatch,
  matcheController.createMatch,
);
matcheRouter.patch('/matches/:id/finish', matcheController.finishMatch);

export default matcheRouter;
