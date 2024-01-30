"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const _1 = require("./");
class ForbiddenError extends _1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 403;
        this.message = message;
    }
    getResponse() {
        return {
            success: false,
            errorMessage: this.message,
        };
    }
}
exports.ForbiddenError = ForbiddenError;
