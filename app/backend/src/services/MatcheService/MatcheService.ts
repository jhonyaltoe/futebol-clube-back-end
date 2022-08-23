import { IMatchesFK } from '../../database/entities';
import IMatcheService from './IMatcheService';
import MatchesRepository from '../../database/repository/MatcheRepository';

export default class MatcheService implements IMatcheService {
  constructor(
    private matche: MatchesRepository,
  ) {}

  public async getAll(): Promise<IMatchesFK[] | []> {
    const matches = await this.matche.getAll();
    return matches;
  }
}
