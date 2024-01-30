import { injectable } from 'tsyringe';
import { TokenRepository } from '../repositories/token.repo';
import { UnauthorizedError } from '../common/errors';
import { JWTService } from './jwt.service';

@injectable()
export class TokenService {
    constructor(
        private readonly tokenRepo: TokenRepository,
        private readonly jwtService: JWTService,
    ) {}

    async checkToken(token: string) {
        const result = await this.tokenRepo.readOne({ filter: { token } });
        if (!result) throw new UnauthorizedError('no token found');

        try {
            return this.jwtService.decodeToken(token);
        } catch (err) {
            await this.tokenRepo.delete(result.id);
            throw err;
        }
    }
}
