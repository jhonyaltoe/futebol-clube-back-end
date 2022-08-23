import ITeams from '../../database/entities/ITeams';
import ITeamService from './ITeamService';
// import Teams from '../../database/models/Teams';

export default class TeamService implements ITeamService<ITeams> {
  constructor(
    private team: ITeamService<ITeams>,
  ) {}

  public async getAll(): Promise<ITeams[]> {
    const teams: ITeams[] = await this.team.getAll();
    return teams as ITeams[];
  }

  public async getOne(id: number): Promise<ITeams | null> {
    const team: ITeams | null = await this.team.getOne(id);
    return team;
  }
}
