import Matche from '../models/Matche';
import Team from '../models/Team';
import { MatcheCreate, IMatche, ITeamGoals, IMatcheFKV } from '../entities';

export default class MatcheRepository {
  private matcheModel = Matche;
  private teamModel = Team;

  public async getAll(where?: object): Promise<IMatcheFKV[] | void> {
    const matches: any = await this.matcheModel.findAll({
      include: [
        { model: this.teamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: this.teamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
      where: { ...where },
      raw: true,
      nest: true,
    });
    return matches as IMatcheFKV[];
  }

  public async createMatch(matche: MatcheCreate): Promise<IMatche> {
    const newMatche = await this.matcheModel.create({ ...matche });
    return newMatche;
  }

  public async finishMatch(id: number): Promise<number> {
    const [updatedItemsQtt] = await this.matcheModel.update({ inProgress: 0 }, { where: { id } });
    return updatedItemsQtt;
  }

  public async update(id: number, teamGoals: ITeamGoals): Promise<void> {
    const { homeTeamGoals, awayTeamGoals } = teamGoals;
    await this.matcheModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  }
}
