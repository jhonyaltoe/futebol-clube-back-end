import IPersistanceService from '../IPersistanceService';

export interface IToken {
  token: string;
}

export default interface IUserService<T> extends IPersistanceService<T> {
  loginValidate(email: string): Promise<IToken | undefined>;
}
