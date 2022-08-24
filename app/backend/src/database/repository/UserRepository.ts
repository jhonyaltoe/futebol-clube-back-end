import User from '../models/User';
import IUser from '../entities/IUser';

export default class UserRepository {
  private user = User;

  public async login(email: string): Promise<IUser | null> {
    const user: IUser | null = await this.user.findOne({ where: { email } });
    return user;
  }

  public async loginValidate(email: string) {
    const user: IUser | null = await this.user.findOne({ where: { email } });
    return user?.role;
  }
}
