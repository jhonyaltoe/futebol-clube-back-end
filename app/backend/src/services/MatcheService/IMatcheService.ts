import { IMatche, IMatcheCreate, IMatcheFK, ITeamGoals } from '../../database/entities';

export default interface IMatcheService {
  getAll(): Promise<IMatcheFK[] | []>;
  createMatch(matche: IMatcheCreate): Promise<IMatche>;
  finishMatch(id: number): Promise<{ message: 'Finished' }>;
  update(id: number, teamGoals: ITeamGoals): Promise<void>;
}
