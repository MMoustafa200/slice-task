import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import { TokenService } from '../../services/token.service';

const tokenService = container.resolve(TokenService);

export const isAuth = async (
    req: Request<{}, {}, {}, { token: string }>,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { token } = req.query;

        const result = await tokenService.checkToken(token);
        req.user = result;

        next();
    } catch (err) {
        next(err);
    }
};
