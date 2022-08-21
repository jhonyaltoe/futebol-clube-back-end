import { jwtGenerator } from '../../utils';
import UserRepository from '../../database/repository/UserRepository';
import UserService from './UserService';

export default class UserServiceFactory {
  public static create() {
    const userRepository = new UserRepository();
    const jwt = jwtGenerator;
    return new UserService(userRepository, jwt);
  }
}
