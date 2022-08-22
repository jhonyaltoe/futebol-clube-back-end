import { Request, Response, RequestHandler } from 'express';
import ITeamService from '../services/TeamService/ITeamService';
import ITeams from '../database/entities/ITeams';
import { controllerWrapper } from '../utils';

export default class TeamController {
  constructor(
    private teamService: ITeamService<ITeams>,
  ) {}

  public getAll: RequestHandler = controllerWrapper(async (_req: Request, res: Response) => {
    const teams = await this.teamService.getAll();
    res.status(200).json(teams);
  });
}
