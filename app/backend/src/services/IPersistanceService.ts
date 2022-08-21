export interface Token {
  token: string,
}

export default interface IPersistanceService<T> {
  login(login: T): Promise<Token | void>;
}
