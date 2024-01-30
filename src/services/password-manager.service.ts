import bcrypt from 'bcrypt';
import { UnauthorizedError } from '../common/errors';

export class PasswordManagerService {
    constructor() {}

    async hash(password: string) {
        return await bcrypt.hash(password, 12);
    }

    async compare(password: string, storedPassword: string) {
        const isValid = await bcrypt.compare(password, storedPassword);

        if (!isValid) throw new UnauthorizedError('invalid credentials');
    }
}
