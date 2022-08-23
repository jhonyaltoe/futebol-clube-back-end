import { IMatchesFK } from '../../database/entities';

export default interface IMatcheService {
  getAll(): Promise<IMatchesFK[] | []>;
}
