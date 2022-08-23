export interface IToken {
  token: string;
}

export default interface IUserService<T> {
  login(login: T): Promise<IToken | void>;
  loginValidate(login: string): Promise<IToken | undefined>;
}
