import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/user.repo';
import { TokenRepository } from '../repositories/token.repo';

@injectable()
export class AuthService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly tokenRepo: TokenRepository,
    ) {}

    async register() {}

    async login() {}
}
