import { injectable } from 'tsyringe';
import { AuthorService } from '../services/author.service';
import { NextFunction, Request, Response } from 'express';

@injectable()
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    async getRandomAuthor(req: Request, res: Response, next: NextFunction) {}
}
