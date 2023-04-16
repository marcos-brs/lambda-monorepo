import { Response, Request, NextFunction } from 'express';

export const handlerToExpress = (handler: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await handler(req, {});
    res.status(response.statusCode).send(response.body);
  } catch (error) {
    console.error(error)
    next(error);
  }
};
