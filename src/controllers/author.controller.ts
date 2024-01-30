import { injectable } from 'tsyringe';
import { AuthorService } from '../services/author.service';
import { NextFunction, Request, Response } from 'express';
import { ProcessResult } from '../common/interfaces';

@injectable()
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    async getRandomAuthor(req: Request, res: Response, next: NextFunction) {
        try {
            const author = await this.authorService.getRandomAuthor();

            res.status(200).json(<ProcessResult>{
                success: true,
                data: author,
            });
        } catch (err) {
            next(err);
        }
    }
}
