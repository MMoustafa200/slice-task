import { CustomError } from './';
import { ProcessResult } from '../interfaces';

export class NotFoundError extends CustomError {
    statusCode: number = 404;

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
