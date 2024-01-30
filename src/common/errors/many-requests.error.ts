import { CustomError } from './';
import { ProcessResult } from '../interfaces';

export class ManyRequestsError extends CustomError {
    statusCode: number = 429;

    constructor(message: string) {
        super(message);

        this.message = message;
    }

    getResponse(): ProcessResult<any> {
        return {
            success: false,
            innerError: this.message,
        };
    }
}
