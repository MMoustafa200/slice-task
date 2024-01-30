import { CustomError } from './';
import { ProcessResult } from '../interfaces';

export class ValidationError extends CustomError {
    statusCode: number = 422;

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
