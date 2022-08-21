import { Request, Response, NextFunction } from 'express';
import { CustonError } from '../utils';

const errorHandler = (error: CustonError, _req: Request, res: Response, _next: NextFunction) =>
  res.status(error.statusCode || 500).json({ message: error.message || 'Internal server error' });

export default errorHandler;
