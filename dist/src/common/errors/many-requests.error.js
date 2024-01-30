"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManyRequestsError = void 0;
const _1 = require("./");
class ManyRequestsError extends _1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 429;
        this.message = message;
    }
    getResponse() {
        return {
            success: false,
            innerError: this.message,
        };
    }
}
exports.ManyRequestsError = ManyRequestsError;
