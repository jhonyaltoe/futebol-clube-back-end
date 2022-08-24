import Teams from '../models/Team';
import { ITeam } from '../entities';

export default class TeamRepository {
  private teams = Teams;

  public async getAll(): Promise<ITeam[]> {
    const teams: ITeam[] | [] = await this.teams.findAll();
    return teams;
  }

  public async getOne(id: number): Promise<ITeam> {
    const team: ITeam | null = await this.teams.findOne({ where: { id } });
    return team as ITeam;
  }
}
