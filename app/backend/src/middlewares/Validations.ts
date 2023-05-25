import { Response, Request, NextFunction } from 'express';
import { Joi, HandleThrowError } from '../utils';
import { Login } from '../utils/Joi/loginShema';

class Validations {
  public static loginValidation = (req: Request, _res: Response, next: NextFunction) => {
    const login: Login = req.body;
    Joi.joiValidateLogin(login);
    next();
  };

  public static createMatch = (req: Request, _res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
      HandleThrowError('It is not possible to create a match with two equal teams', 401);
    }
    next();
  };
}

export default Validations;
