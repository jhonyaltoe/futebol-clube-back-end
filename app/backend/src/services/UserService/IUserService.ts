export type Token = {
  token: string;
};

export type Role = 'admin' | 'user';

export default interface IUserService<T> {
  login(login: T): Promise<Token | void>;
  loginValidate(email: string): Promise<Role>;
}
