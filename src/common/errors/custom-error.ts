import { ProcessResult } from '../interfaces';

export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);
    }

    abstract getResponse(): ProcessResult<any>;
}
