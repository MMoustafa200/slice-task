"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const _1 = require("./");
class BadRequestError extends _1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 400;
        this.message = message;
    }
    getResponse() {
        return {
            success: false,
            errorMessage: this.message,
        };
    }
}
exports.BadRequestError = BadRequestError;
