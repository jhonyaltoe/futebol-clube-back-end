import { Request, Response } from 'express';
import { controllerWrapper } from '../utils';
import IUserService from '../services/UserService/IUserService';
import { IUser } from '../database/entities';

class UserController {
  constructor(
    private user: IUserService<IUser>,
  ) {}

  public login = controllerWrapper(async (req: Request, res: Response) => {
    const token = await this.user.login(req.body);
    return res.status(200).json(token);
  });

  public loginValidate = controllerWrapper(async (req: Request, res: Response) => {
    const role = await this.user.loginValidate(req.body.user.email as string);
    return res.status(200).json({ role });
  });
}

export default UserController;
