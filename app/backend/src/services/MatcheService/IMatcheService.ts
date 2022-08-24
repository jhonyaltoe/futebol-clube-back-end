import { IMatche, IMatcheCreate, IMatcheFK } from '../../database/entities';

export default interface IMatcheService {
  getAll(): Promise<IMatcheFK[] | []>;
  saveMatch(matche: IMatcheCreate): Promise<IMatche>;
  finishMatch(id: number): Promise<{ message: 'Finished' }>;
}
