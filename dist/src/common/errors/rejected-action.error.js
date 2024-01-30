"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectedActionError = void 0;
const _1 = require("./");
class RejectedActionError extends _1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 406;
        this.message = message;
    }
    getResponse() {
        return {
            success: false,
            errorMessage: this.message,
        };
    }
}
exports.RejectedActionError = RejectedActionError;
