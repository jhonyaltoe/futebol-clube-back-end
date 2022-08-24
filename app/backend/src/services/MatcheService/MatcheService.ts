import { IMatche, IMatcheCreate, IMatcheFK } from '../../database/entities';
import IMatcheService from './IMatcheService';
import MatcheRepository from '../../database/repository/MatcheRepository';

export default class MatcheService implements IMatcheService {
  constructor(
    private matche: MatcheRepository,
  ) {}

  public async getAll(): Promise<IMatcheFK[] | []> {
    const matches = await this.matche.getAll();
    return matches;
  }

  public async saveMatch(matche: IMatcheCreate): Promise<IMatche> {
    const newMatche = await this.matche.saveMatch(matche);
    return newMatche;
  }
}
