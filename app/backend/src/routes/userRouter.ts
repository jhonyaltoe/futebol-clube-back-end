import { Router } from 'express';
import Auth from '../middlewares/TokenAunth';
import Validations from '../middlewares/Validations';
import Factory from '../Factory';

const userRouter = Router();

const userController = Factory.user();

userRouter.post('/login', Validations.loginValidation, userController.login);
userRouter.get('/login/validate', Auth.tokenJWT, userController.loginValidate);

export default userRouter;
