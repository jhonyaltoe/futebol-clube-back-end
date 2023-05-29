import { Router } from 'express';
import Factory from '../Factory';
import { Aunth, Validations } from '../middlewares';

const matcheRouter = Router();
const matcheController = Factory.matche();

matcheRouter.get('/matches', Validations.matchesValidation, matcheController.getAll);
matcheRouter.post(
  '/matches',
  Aunth.tokenJWT,
  Validations.createMatch,
  matcheController.createMatch,
);
matcheRouter.patch('/matches/:id/finish', matcheController.finishMatch);
matcheRouter.patch('/matches/:id', matcheController.update);

export default matcheRouter;
