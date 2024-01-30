import { injectable } from 'tsyringe';
import { QuoteRepository } from '../repositories/quote.repo';

@injectable()
export class QuoteService {
    constructor(private readonly quoteRepo: QuoteRepository) {}
}
