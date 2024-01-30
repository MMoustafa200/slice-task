import { injectable } from 'tsyringe';
import { TokenRepository } from '../repositories/token.repo';

@injectable()
export class TokenService {
    constructor(private readonly tokenRepo: TokenRepository) {}
}
