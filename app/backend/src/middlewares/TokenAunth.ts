import { Response, Request, NextFunction } from 'express';
import { Secret } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import { HandleThrowError } from '../utils';

export default class Auth {
  static tokenJWT = (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) HandleThrowError('The token is required', 401);

    try {
      const user = jwt.verify(authorization || 'undefined', process.env.JWT_SECRET as Secret);
      req.body.userAuth = user;
    } catch (e: any) {
      HandleThrowError('Token must be a valid token', 401);
    }
    next();
  };
}
