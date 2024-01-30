import { injectable } from 'tsyringe';
import { AuthorRepository } from '../repositories/author.repo';

@injectable()
export class AuthorService {
    constructor(private readonly authorRepo: AuthorRepository) {}

    async getRandomAuthor() {
        const totalCount = await this.authorRepo.count();
        const randomIndex = Math.floor(Math.random() * totalCount);

        await new Promise((resolve) => setTimeout(resolve, 5000));

        return await this.authorRepo.readOne({
            select: { id: true, name: true },
            skip: randomIndex,
            take: 1,
        });
    }
}
