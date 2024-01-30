import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/user.repo';
import { TokenRepository } from '../repositories/token.repo';
import { User } from '@prisma/client';
import {
    BadRequestError,
    UnauthorizedError,
    ValidationError,
} from '../common/errors';
import { PasswordManagerService } from './password-manager.service';
import { JWTService } from './jwt.service';

@injectable()
export class AuthService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly tokenRepo: TokenRepository,
        private readonly passwordManagerService: PasswordManagerService,
        private readonly jwtService: JWTService,
    ) {}

    async register(data: Pick<User, 'email' | 'password' | 'fullname'>) {
        const existedUser = await this.userRepo.readOne({
            filter: { email: data.email },
        });
        if (existedUser) throw new ValidationError('already registered data');

        const hashedPassword = await this.passwordManagerService.hash(
            data.password,
        );
        return await this.userRepo.create({
            ...data,
            password: hashedPassword,
        });
    }

    async login(data: Pick<User, 'email' | 'password'>) {
        const { email, password } = data;

        const user = await this.userRepo.readOne({ filter: { email } });
        if (!user) throw new UnauthorizedError('invalid credentials');

        await this.passwordManagerService.compare(password, user.password);

        const existedToken = await this.tokenRepo.readOne({
            filter: { userId: user.id },
        });
        if (existedToken) throw new BadRequestError('already logged in');

        const token = this.jwtService.generateAccessToken({
            id: user.id,
            email: user.email,
            fullname: user.fullname,
        });
        this.tokenRepo.create({ userId: user.id, token });
        return token;
    }

    async logout(userId: number) {
        const token = await this.tokenRepo.readOne({ filter: { userId } });
        if (!token) throw new BadRequestError('not logged in');

        return await this.tokenRepo.delete(token.id);
    }
}
