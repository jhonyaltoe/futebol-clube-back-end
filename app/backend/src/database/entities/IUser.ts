export interface ILogin {
  email: string;
  password: string;
}

export default interface IUser extends ILogin {
  id: number,
  username: string;
  role: string;
}
