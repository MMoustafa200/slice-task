"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const _1 = require("./");
class NotFoundError extends _1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.message = message;
    }
    getResponse() {
        return {
            success: false,
            errorMessage: this.message,
        };
    }
}
exports.NotFoundError = NotFoundError;
