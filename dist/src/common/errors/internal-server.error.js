"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const _1 = require("./");
class InternalServerError extends _1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 500;
        this.message = message;
    }
    getResponse() {
        return {
            success: false,
            innerError: this.message,
        };
    }
}
exports.InternalServerError = InternalServerError;
