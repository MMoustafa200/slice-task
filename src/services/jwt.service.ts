import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../common/errors';
import { tokenData } from '../common/types';

export class JWTService {
    constructor() {}

    generateAccessToken(data: tokenData) {
        const accessToken = jwt.sign(data, process.env.JWT_SECRET as string, {
            expiresIn: 60 * 60 * 8,
        });

        return accessToken;
    }

    decodeToken(token: string, secret: string) {
        try {
            const decodedToken = jwt.verify(
                token,
                process.env.JWT_SECRET as string,
            );

            return decodedToken as tokenData;
        } catch (err: any) {
            throw new UnauthorizedError(err.message);
        }
    }
}
