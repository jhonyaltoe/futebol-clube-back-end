import Matches from '../models/Matches';
import Teams from '../models/Teams';
import { IMatchesFK } from '../entities/IMatches';

export default class MatchesRepository {
  private matches = Matches;

  public async getAll(): Promise<IMatchesFK[] | []> {
    const matches: IMatchesFK[] | [] = await this.matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }
}
