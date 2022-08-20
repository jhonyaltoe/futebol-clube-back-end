import { Router } from 'express';
import UserController from '../controllers/UserController';
import Validations from '../middlewares/Validations';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/login', Validations.LoginValidation, userController.login);

export default userRouter;
