import { CustomError } from './';
import { ProcessResult } from '../interfaces';

export class InternalServerError extends CustomError {
    statusCode: number = 500;

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
