import { Response, Request, NextFunction } from 'express';
import { Joi } from '../utils';

class Validations {
  static loginValidation = (req: Request, _res: Response, next: NextFunction) => {
    const login = req.body;
    Joi.joiValidateLogin(login);
    next();
  };
}

export default Validations;
