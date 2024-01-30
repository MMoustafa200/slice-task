import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/user.repo';

@injectable()
export class UserService {
    constructor(private readonly userRepo: UserRepository) {}
}
