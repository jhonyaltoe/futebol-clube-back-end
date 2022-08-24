import Matche from '../models/Matche';
import Team from '../models/Team';
import { IMatcheCreate, IMatche, IMatcheFK } from '../entities';

export default class MatcheRepository {
  private matche = Matche;
  private team = Team;

  public async getAll(): Promise<IMatcheFK[]> {
    const matches: IMatcheFK[] | [] = await this.matche.findAll({
      include: [
        { model: this.team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: this.team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  public async saveMatch(matche: IMatcheCreate): Promise<IMatche> {
    const newMatche = await this.matche.create({ ...matche });
    return newMatche;
  }
}
