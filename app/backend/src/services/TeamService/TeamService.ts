import ITeam from '../../database/entities/ITeam';
import ITeamService from './ITeamService';

export default class TeamService implements ITeamService<ITeam> {
  constructor(
    private team: ITeamService<ITeam>,
  ) {}

  public async getAll(): Promise<ITeam[]> {
    const teams: ITeam[] = await this.team.getAll();
    return teams as ITeam[];
  }

  public async getOne(id: number): Promise<ITeam | null> {
    const team: ITeam | null = await this.team.getOne(id);
    return team;
  }
}
