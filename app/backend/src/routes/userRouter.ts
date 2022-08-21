import { Router } from 'express';
import UserController from '../controllers/UserController';
import Auth from '../middlewares/TokenAunth';
import Validations from '../middlewares/Validations';
import UserServiceFactory from '../services/UserService';

const userController = new UserController(UserServiceFactory.create());

const userRouter = Router();

userRouter.post('/login', Validations.loginValidation, userController.login);
userRouter.get('/login/validate', Auth.tokenJWT, userController.loginValidate);

export default userRouter;
