export default interface ITeamService<T> {
  getAll(): Promise<T[]>;
}
