import { injectable } from 'tsyringe';
import { QuoteService } from '../services/quote.service';
import { NextFunction, Request, Response } from 'express';

@injectable()
export class QuoteController {
    constructor(private readonly quoteService: QuoteService) {}

    async getRandomQuote(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (err) {
            next(err);
        }
    }
}
