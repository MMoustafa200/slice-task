import { injectable } from 'tsyringe';
import { AuthorRepository } from '../repositories/author.repo';

@injectable()
export class AuthorService {
    constructor(private readonly authorRepo: AuthorRepository) {}
}
