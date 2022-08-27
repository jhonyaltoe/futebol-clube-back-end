import { Request, Response, RequestHandler } from 'express';
import { controllerWrapper } from '../utils';
import IUserService from '../services/UserService/IUserService';
import { IUser } from '../database/entities';

export default class UserController {
  constructor(
    private user: IUserService<IUser>,
  ) {}

  public login: RequestHandler = controllerWrapper(async (req: Request, res: Response) => {
    const token = await this.user.login(req.body);
    return res.status(200).json(token);
  });

  public loginValidate: RequestHandler = controllerWrapper(async (req: Request, res: Response) => {
    const role = await this.user.loginValidate(req.body.userAuth.email);
    return res.status(200).json({ role });
  });
}
