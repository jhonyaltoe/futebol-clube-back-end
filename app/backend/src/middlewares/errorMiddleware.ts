import { Request, Response, NextFunction } from 'express';
import { CustonError } from '../utils';

export default (error: CustonError, _req: Request, res: Response, _next: NextFunction) =>
  res.status(error.statusCode || 500).json({ message: error.message || 'Internal server error' });
