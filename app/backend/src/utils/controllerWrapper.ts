import { Request, Response, NextFunction, Handler } from 'express';

export default (func: Handler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
