import { IMatche, IMatcheCreate, IMatcheFK } from '../../database/entities';
import IMatcheService from './IMatcheService';
import MatcheRepository from '../../database/repository/MatcheRepository';
import TeamRepository from '../../database/repository/TeamRepository';
import { HandleThrowError } from '../../utils';

export default class MatcheService implements IMatcheService {
  constructor(
    private matcheRepository: MatcheRepository,
    private teamRepository: TeamRepository,
  ) {}

  private async teste(id: number) {
    const hasTeam = await this.teamRepository.getOne(id);
    if (hasTeam === null) HandleThrowError('There is no team with such id!', 404);
  }

  public async getAll(): Promise<IMatcheFK[] | []> {
    const matches = await this.matcheRepository.getAll();
    return matches;
  }

  public async createMatch(matche: IMatcheCreate): Promise<IMatche> {
    await Promise.all([this.teste(matche.homeTeam), this.teste(matche.awayTeam)]);
    const newMatche = await this.matcheRepository.createMatch(matche);
    return newMatche;
  }

  public async finishMatch(id: number): Promise<{ message: 'Finished' }> {
    const finish = await this.matcheRepository.finishMatch(id);
    return finish;
  }
}
