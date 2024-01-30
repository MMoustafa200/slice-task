import { tokenData } from './token-data.type';

declare global {
    namespace Express {
        interface Request {
            user: tokenData;
        }
    }
}
