import { Request, Response, NextFunction } from 'express';

import { NotFoundError } from '../errors';

export const routeCatcher = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    throw new NotFoundError('not found');
};
