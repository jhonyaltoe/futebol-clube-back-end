import { compare } from 'bcryptjs';
import IUser, { ILogin } from '../database/entities/IUser';
import UserRepository from '../database/repository/UserRepository';
import { jwtGenerator, HandleThrowError } from '../utils';
import { Token } from './IUserService';

class UserService {
  constructor(
    private user = new UserRepository(),
  ) {}

  public async login(login: ILogin): Promise<Token | void> {
    const user: IUser | null = await this.user.login(login.email);
    if (user) {
      const isValid = await compare(login.password, user.password);
      if (!isValid) HandleThrowError('Incorrect email or password', 401);
      const token = jwtGenerator({
        email: user.email,
        username: user.username,
        role: user.role,
      });
      return { token };
    }

    if (user === null) HandleThrowError('Incorrect email or password', 401);
  }

  public async loginValidate(email: string) {
    const role: string | undefined = await this.user.loginValidate(email);
    if (!role) HandleThrowError('The user do not exist', 401);
    return role;
  }
}

export default UserService;
