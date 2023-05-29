import { Response, Request, NextFunction } from 'express';
import { Joi, HandleThrowError } from '../utils';
import { Login } from '../utils/Joi/loginShema';
import { MatcheCreate } from '../database/entities';

interface Req<T> extends Request {
  body: T
}

class Validations {
  public static loginValidation = (req: Request, _res: Response, next: NextFunction) => {
    const login: Login = req.body;
    Joi.joiValidateLogin(login);
    next();
  };

  public static createMatch = (req: Req<MatcheCreate>, _res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
      HandleThrowError('It is not possible to create a match with two equal teams', 401);
    }
    next();
  };

  public static matchesValidation = (req: Request, _res: Response, next: NextFunction) => {
    const { inProgress } = req.query as { inProgress: 'true' | 'false' | undefined };
    if (inProgress !== 'true' && inProgress !== 'false' && inProgress) {
      HandleThrowError('The "inProgress" param should be "true" or "false"', 401);
    }
    next();
  };
}

export default Validations;
