import { Request, Response, NextFunction } from 'express';

export default (func: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res);
    } catch (error) {
      next(error);
    }
  };
