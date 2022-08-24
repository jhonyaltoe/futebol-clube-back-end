import { Request, Response } from 'express';
import IMatcheService from '../services/MatcheService/IMatcheService';
import { controllerWrapper } from '../utils';

export default class MatcheController {
  constructor(
    private matche: IMatcheService,
  ) {}

  public getAll = controllerWrapper(async (req: Request, res: Response) => {
    const matches = await this.matche.getAll();
    res.status(200).json(matches);
  });

  public saveMatch = controllerWrapper(async (req: Request, res: Response) => {
    const newMatche = await this.matche.saveMatch(req.body);
    res.status(201).json(newMatche);
  });
}
