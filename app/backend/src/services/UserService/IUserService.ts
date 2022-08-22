import IPersistanceService from '../IPersistanceService';

export interface IToken {
  token: string;
}

export default interface IUserService<T> extends IPersistanceService<T> {
  loginValidate(login: string): Promise<IToken | undefined>;
}
