import { compare } from 'bcryptjs';
import IUser, { ILogin } from '../database/entities/IUser';
import UserRepository from '../database/repository/UserRepository';
import { CustonError, jwtGenerator } from '../utils';
import { Token } from './IUserService';

class UserService {
  private user: UserRepository;

  constructor() {
    this.user = new UserRepository();
  }

  public async login(login: ILogin): Promise<Token | void> {
    const user: IUser | null = await this.user.login(login.email);
    if (user) {
      const isValid = await compare(login.password, user.password);
      console.log(user.password, login.password);
      if (isValid === false) throw new CustonError('Usuário ou senha incorreto!', 404);
      const { password, ...rest } = user;
      const token = jwtGenerator({ ...rest });
      return { token };
    }

    if (user === null) throw new CustonError('O usuário não existe!', 404);
  }
}

export default UserService;
