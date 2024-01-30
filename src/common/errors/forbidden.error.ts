import { CustomError } from './';
import { ProcessResult } from '../interfaces';

export class ForbiddenError extends CustomError {
    statusCode: number = 403;

    constructor(message: string) {
        super(message);

        this.message = message;
    }

    getResponse(): ProcessResult<any> {
        return {
            success: false,
            errorMessage: this.message,
        };
    }
}
