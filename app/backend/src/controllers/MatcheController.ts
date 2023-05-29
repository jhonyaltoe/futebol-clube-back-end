import { Request, Response } from 'express';
import IMatcheService from '../services/MatcheService/IMatcheService';
import { controllerWrapper } from '../utils';
import { MatcheCreate } from '../database/entities';

interface Req<T> extends Request {
  body: T
}

export default class MatcheController {
  constructor(
    private matcheService: IMatcheService,
  ) {}

  public getAll = controllerWrapper(async (req: Request, res: Response) => {
    let where = {};
    const { inProgress } = req.query as { inProgress: 'true' | 'false' | undefined };
    if (inProgress) where = { inProgress: inProgress === 'true' };
    const matches = await this.matcheService.getAll(where);
    res.status(200).json(matches);
  });

  public createMatch = controllerWrapper(async (req: Req<MatcheCreate>, res: Response) => {
    const newMatche = await this.matcheService.createMatch(req.body);
    res.status(201).json(newMatche);
  });

  public finishMatch = controllerWrapper(async (req: Request, res: Response) => {
    const { id } = req.params;
    const finish = await this.matcheService.finishMatch(Number(id));
    if (finish.status) {
      res.sendStatus(finish.status);
      return;
    }
    res.status(200).json(finish.message);
  });

  public update = controllerWrapper(async (req: Request, res: Response) => {
    const { id } = req.params;
    this.matcheService.update(Number(id), req.body);
    res.status(200).json({ message: 'Successfully updated!' });
  });
}
