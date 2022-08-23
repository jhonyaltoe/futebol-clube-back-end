export default interface ITeamService<T> {
  getAll(): Promise<T[] | []>;
  getOne(id: number): Promise<T | null>;
}
