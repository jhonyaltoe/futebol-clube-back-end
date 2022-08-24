import Matche from '../models/Matche';
import Team from '../models/Team';
import { IMatcheCreate, IMatche, IMatcheFK } from '../entities';

export default class MatcheRepository {
  private matcheModel = Matche;
  private teamModel = Team;

  public async getAll(): Promise<IMatcheFK[]> {
    const matches: IMatcheFK[] | [] = await this.matcheModel.findAll({
      include: [
        { model: this.teamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: this.teamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  public async createMatch(matche: IMatcheCreate): Promise<IMatche> {
    const newMatche = await this.matcheModel.create({ ...matche });
    return newMatche;
  }

  public async finishMatch(id: number): Promise<{ message: 'Finished' }> {
    await this.matcheModel.update({ inProgress: 0 }, { where: { id } });
    return { message: 'Finished' };
  }
}
