import { Request, Response, RequestHandler } from 'express';
import { controllerWrapper } from '../utils';
import IUserService, { Role } from '../services/UserService/IUserService';
import { IUser } from '../database/entities';

export default class UserController {
  constructor(
    private userService: IUserService<IUser>,
  ) {}

  public login: RequestHandler = controllerWrapper(async (req: Request, res: Response) => {
    const token = await this.userService.login(req.body);
    return res.status(200).json(token);
  });

  public loginValidate: RequestHandler = controllerWrapper(async (req: Request, res: Response) => {
    const role: Role = await this.userService.loginValidate(req.body.userAuth.email as string);
    return res.status(200).json({ role });
  });
}
