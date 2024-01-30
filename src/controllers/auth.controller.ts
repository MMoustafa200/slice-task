import { injectable } from 'tsyringe';
import { AuthService } from '../services/auth.service';
import { NextFunction, Request, Response } from 'express';
import { User } from '@prisma/client';
import { ProcessResult } from '../common/interfaces';

@injectable()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    async register(
        req: Request<{}, {}, Pick<User, 'email' | 'password' | 'fullname'>>,
        res: Response,
        next: NextFunction,
    ) {
        await this.authService.register(req.body);

        res.status(201).json(<ProcessResult>{
            success: true,
            data: {},
        });
    }

    async login(
        req: Request<{}, {}, Pick<User, 'email' | 'password'>>,
        res: Response,
        next: NextFunction,
    ) {
        const token = await this.authService.login(req.body);

        res.status(200).json(<ProcessResult>{
            success: true,
            data: { token },
        });
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        await this.authService.logout(req.user.id);

        res.status(200).json(<ProcessResult>{
            success: true,
            data: {},
        });
    }
}
