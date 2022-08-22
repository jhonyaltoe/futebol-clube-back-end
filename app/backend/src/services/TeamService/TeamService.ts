import ITeams from '../../database/entities/ITeams';
import ITeamService from './ITeamService';
import Teams from '../../database/models/Teams';

export default class TeamService implements ITeamService<ITeams> {
  constructor(
    private team: ITeamService<Teams>,
  ) {}

  public async getAll(): Promise<Teams[] | []> {
    const teams: Teams[] | [] = await this.team.getAll();
    return teams;
  }
}
