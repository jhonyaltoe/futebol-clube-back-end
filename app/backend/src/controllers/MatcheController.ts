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
}
