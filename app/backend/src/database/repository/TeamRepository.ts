import Teams from '../models/Teams';

export default class TeamRepository {
  private teams = Teams;

  public async getAll(): Promise<Teams[] | []> {
    const teams: Teams[] | [] = await this.teams.findAll();
    return teams;
  }
}
