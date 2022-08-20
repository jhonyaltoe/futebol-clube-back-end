import { ILogin } from '../database/entities';

export interface Token {
  token: string,
}

export default interface IPersistanceUserService {
  login(login: ILogin): Promise<Token | void>;
}
