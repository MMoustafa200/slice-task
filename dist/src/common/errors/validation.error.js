"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const _1 = require("./");
class ValidationError extends _1.CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 422;
        this.message = message;
    }
    getResponse() {
        return {
            success: false,
            errorMessage: this.message,
        };
    }
}
exports.ValidationError = ValidationError;
