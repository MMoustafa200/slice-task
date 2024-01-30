import { injectable } from 'tsyringe';
import { AuthService } from '../services/auth.service';
import { NextFunction, Request, Response } from 'express';

@injectable()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    async register(req: Request, res: Response, next: NextFunction) {}

    async login(req: Request, res: Response, next: NextFunction) {}

    async logout(req: Request, res: Response, next: NextFunction) {}
}
