import { injectable } from 'tsyringe';
import { AuthorRepository } from '../repositories/author.repo';

@injectable()
export class AuthorService {
    constructor(private readonly authorRepo: AuthorRepository) {}

    async getRandomAuthor() {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return await this.authorRepo.getRandomOne();
    }
}
