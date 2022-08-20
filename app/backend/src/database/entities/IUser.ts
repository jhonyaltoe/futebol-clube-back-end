export interface ILogin {
  email: string;
  password: string;
}

export default interface IUser extends ILogin {
  username: string;
  role: string;
}
