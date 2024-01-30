import { injectable } from 'tsyringe';
import { UserService } from '../services/user.service';
import { NextFunction, Request, Response } from 'express';
import { ProcessResult } from '../common/interfaces';

@injectable()
export class UserController {
    constructor(private readonly userService: UserService) {}

    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const profile = await this.userService.getProfile(req.user.id);

            res.status(200).json(<ProcessResult>{
                success: true,
                data: profile,
            });
        } catch (err) {
            next(err);
        }
    }
}
