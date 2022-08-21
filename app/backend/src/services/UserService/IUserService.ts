import IPersistanceService from '../IPersistanceService';

export default interface IUserService<T> extends IPersistanceService<T> {
  loginValidate(email: string): Promise<string | undefined>;
}
