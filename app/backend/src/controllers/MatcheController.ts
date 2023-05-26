import { Request, Response } from 'express';
import IMatcheService from '../services/MatcheService/IMatcheService';
import { controllerWrapper } from '../utils';
import { MatcheCreate } from '../database/entities';

export default class MatcheController {
  constructor(
    private matcheService: IMatcheService,
  ) {}

  public getAll = controllerWrapper(async (_req: Request, res: Response) => {
    const matches = await this.matcheService.getAll();
    res.status(200).json(matches);
  });

  public createMatch = controllerWrapper(async (req: Request, res: Response) => {
    const newMatche = await this.matcheService.createMatch(req.body as MatcheCreate);
    res.status(201).json(newMatche);
  });

  public finishMatch = controllerWrapper(async (req: Request, res: Response) => {
    const { id } = req.params;
    const finish = await this.matcheService.finishMatch(Number(id));
    res.status(200).json(finish);
  });

  public update = controllerWrapper(async (req: Request, res: Response) => {
    const { id } = req.params;
    this.matcheService.update(Number(id), req.body);
    res.status(200).json({ message: 'Successfully updated!' });
  });
}
