import { IMatche, MatcheCreate, IMatcheFKV, ITeamGoals } from '../../database/entities';
import IMatcheService, { IFinishMatchReturn } from './IMatcheService';
import MatcheRepository from '../../database/repository/MatcheRepository';
import TeamRepository from '../../database/repository/TeamRepository';
import { HandleThrowError } from '../../utils';

export default class MatcheService implements IMatcheService {
  constructor(
    private matcheRepository: MatcheRepository,
    private teamRepository: TeamRepository,
  ) {}

  private async verifyIfHasTeam(id: number) {
    const hasTeam = await this.teamRepository.getOne(id);
    if (hasTeam === null) HandleThrowError('There is no team with such id!', 404);
  }

  public async getAll(where?: object): Promise<IMatcheFKV[]> {
    const matches = await this.matcheRepository.getAll(where);
    return matches as IMatcheFKV[];
  }

  public async createMatch(matche: MatcheCreate): Promise<IMatche> {
    const toVerify = [matche.homeTeam, matche.awayTeam];
    await Promise.all(toVerify.map((teamId) => this.verifyIfHasTeam(teamId)));
    const newMatche = await this.matcheRepository.createMatch(matche);
    return newMatche;
  }

  public async finishMatch(id: number): Promise<IFinishMatchReturn> {
    const updatedItemsQtt = await this.matcheRepository.finishMatch(id);
    if (updatedItemsQtt === 0) return { status: 304 };
    return { message: 'Finished' };
  }

  public async update(id: number, teamGoals: ITeamGoals): Promise<void> {
    await this.matcheRepository.update(id, teamGoals);
  }
}
