import { IMatche, IMatcheCreate, IMatcheFK } from '../../database/entities';

export default interface IMatcheService {
  getAll(): Promise<IMatcheFK[] | []>;
  createMatch(matche: IMatcheCreate): Promise<IMatche>;
  finishMatch(id: number): Promise<{ message: 'Finished' }>;
}
