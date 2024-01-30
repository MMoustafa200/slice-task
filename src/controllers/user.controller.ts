import { injectable } from 'tsyringe';
import { UserService } from '../services/user.service';
import { NextFunction, Request, Response } from 'express';

@injectable()
export class UserController {
    constructor(private readonly userService: UserService) {}

    async getProfile(req: Request, res: Response, next: NextFunction) {}
}
