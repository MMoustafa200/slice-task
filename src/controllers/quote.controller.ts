import { injectable } from 'tsyringe';
import { QuoteService } from '../services/quote.service';
import { NextFunction, Request, Response } from 'express';
import { ProcessResult } from '../common/interfaces';

@injectable()
export class QuoteController {
    constructor(private readonly quoteService: QuoteService) {}

    async getRandomQuote(
        req: Request<{}, {}, {}, { token: string; authorId: string }>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const { authorId } = req.query;
            const quote = await this.quoteService.getRandomQuote(+authorId);

            res.status(200).json(<ProcessResult>{
                success: true,
                data: quote,
            });
        } catch (err) {
            next(err);
        }
    }
}
