import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'joi';

import { ReqField } from '../enums';

import { ValidationError } from '../errors';

export const validateSchema = (schema: AnySchema, field: ReqField) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            req[field] = await schema.validateAsync(req[field]);

            next();
        } catch (err: any) {
            next(new ValidationError(err.message));
        }
    };
};
