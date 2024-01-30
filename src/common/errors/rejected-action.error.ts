import { CustomError } from './';
import { ProcessResult } from '../interfaces';

export class RejectedActionError extends CustomError {
    statusCode: number = 406;

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
