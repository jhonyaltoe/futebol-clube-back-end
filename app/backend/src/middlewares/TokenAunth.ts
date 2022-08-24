import { Response, Request, NextFunction } from 'express';
import { Secret } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import { HandleThrowError } from '../utils';

export default class Auth {
  static tokenJWT = (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    const user = (!authorization)
      ? HandleThrowError('The token is required', 401)
      : jwt.verify(authorization, process.env.JWT_SECRET as Secret);

    req.body.userAuth = user;
    next();
  };
}
