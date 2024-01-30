import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/user.repo';
import { NotFoundError } from '../common/errors';

@injectable()
export class UserService {
    constructor(private readonly userRepo: UserRepository) {}

    async getProfile(id: number) {
        const profile = await this.userRepo.readOne(
            { id },
            { email: true, fullname: true },
        );
        if (!profile) throw new NotFoundError('no user found');
        return profile;
    }
}
