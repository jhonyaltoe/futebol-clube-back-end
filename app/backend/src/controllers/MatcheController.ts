import { Request, Response } from 'express';
import IMatcheService from '../services/MatcheService/IMatcheService';
import { controllerWrapper } from '../utils';

export default class MatcheController {
  constructor(
    private matcheService: IMatcheService,
  ) {}

  public getAll = controllerWrapper(async (req: Request, res: Response) => {
    const matches = await this.matcheService.getAll();
    res.status(200).json(matches);
  });

  public saveMatch = controllerWrapper(async (req: Request, res: Response) => {
    const newMatche = await this.matcheService.saveMatch(req.body);
    res.status(201).json(newMatche);
  });

  public finishMatch = controllerWrapper(async (req: Request, res: Response) => {
    const { id } = req.params;
    const finish = await this.matcheService.finishMatch(Number(id));
    res.status(200).json(finish);
  });
}
