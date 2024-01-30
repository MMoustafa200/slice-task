import { CustomError } from './';
import { ProcessResult } from '../interfaces';

export class BadRequestError extends CustomError {
    statusCode: number = 400;

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
