import Teams from '../models/Teams';
import { ITeams } from '../entities';

export default class TeamRepository {
  private teams = Teams;

  public async getAll(): Promise<ITeams[]> {
    const teams: ITeams[] | [] = await this.teams.findAll();
    return teams;
  }

  public async getOne(id: number): Promise<ITeams> {
    const team: ITeams | null = await this.teams.findOne({ where: { id } });
    return team as ITeams;
  }
}
