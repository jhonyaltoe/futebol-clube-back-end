import { IMatche, IMatcheCreate, IMatcheFK } from '../../database/entities';
import IMatcheService from './IMatcheService';
import MatcheRepository from '../../database/repository/MatcheRepository';

export default class MatcheService implements IMatcheService {
  constructor(
    private matcheRepository: MatcheRepository,
  ) {}

  public async getAll(): Promise<IMatcheFK[] | []> {
    const matches = await this.matcheRepository.getAll();
    return matches;
  }

  public async saveMatch(matche: IMatcheCreate): Promise<IMatche> {
    const newMatche = await this.matcheRepository.saveMatch(matche);
    return newMatche;
  }

  public async finishMatch(id: number): Promise<{ message: 'Finished' }> {
    const finish = await this.matcheRepository.finishMatch(id);
    return finish;
  }
}
