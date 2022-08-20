import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { controllerWrapper } from '../utils';

class UserController {
  private user: UserService;

  constructor() {
    this.user = new UserService();
  }

  public login = controllerWrapper(async (req: Request, res: Response) => {
    const token = await this.user.login(req.body);
    return res.status(200).json(token);
  });

  public loginValidate = controllerWrapper(async (req: Request, res: Response) => {
    const role = await this.user.loginValidate(req.body.user.email);
    console.log(role);
    res.status(200).json({ role });
  });
}

export default UserController;
