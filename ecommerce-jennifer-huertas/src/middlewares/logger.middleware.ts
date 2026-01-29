import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
   const { method, originalUrl} = req;
   const now = new Date().toLocaleString();

  console.log(`[${now}] ${method} ${originalUrl}`);
    next();
  }
}
