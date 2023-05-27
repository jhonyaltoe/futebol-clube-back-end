import { IMatche, MatcheCreate, IMatcheFKV, ITeamGoals } from '../../database/entities';

export interface IFinishMatchReturn {
  message?: 'Finished';
  status?: 304;
}

export default interface IMatcheService {
  getAll(where?: object): Promise<IMatcheFKV[]>;
  createMatch(matche: MatcheCreate): Promise<IMatche>;
  finishMatch(id: number): Promise<IFinishMatchReturn>;
  update(id: number, teamGoals: ITeamGoals): Promise<void>;
}
