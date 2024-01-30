import { injectable } from 'tsyringe';
import { QuoteRepository } from '../repositories/quote.repo';

@injectable()
export class QuoteService {
    constructor(private readonly quoteRepo: QuoteRepository) {}

    async getRandomQuote(authorId: number) {
        // const totalCount = await this.quoteRepo.count();
        // const randomIndex = Math.floor(Math.random() * totalCount);

        await new Promise((resolve) => setTimeout(resolve, 5000));

        return await this.quoteRepo.getRandomOne(authorId);
    }
}
