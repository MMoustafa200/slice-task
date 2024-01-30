"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const _1 = require("./");
class UnauthorizedError extends _1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 401;
        this.message = message;
    }
    getResponse() {
        return {
            success: false,
            errorMessage: this.message,
        };
    }
}
exports.UnauthorizedError = UnauthorizedError;
