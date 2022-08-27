import { IMatche, IMatcheCreate, IMatcheFKV, ITeamGoals } from '../../database/entities';

export default interface IMatcheService {
  getAll(where?: object): Promise<IMatcheFKV[]>;
  createMatch(matche: IMatcheCreate): Promise<IMatche>;
  finishMatch(id: number): Promise<{ message: 'Finished' }>;
  update(id: number, teamGoals: ITeamGoals): Promise<void>;
}
