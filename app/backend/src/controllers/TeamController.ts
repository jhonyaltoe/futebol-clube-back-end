import { Request, Response, RequestHandler } from 'express';
import ITeamService from '../services/TeamService/ITeamService';
import ITeam from '../database/entities/ITeam';
import { controllerWrapper } from '../utils';

export default class TeamController {
  constructor(
    private team: ITeamService<ITeam>,
  ) {}

  public getAll: RequestHandler = controllerWrapper(async (_req: Request, res: Response) => {
    const teams = await this.team.getAll();
    res.status(200).json(teams);
  });

  public getOne: RequestHandler = controllerWrapper(async (req: Request, res: Response) => {
    const team = await this.team.getOne(Number(req.params.id));
    res.status(200).json(team);
  });
}
