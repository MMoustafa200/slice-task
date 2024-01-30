"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../errors/custom-error");
const errorHandler = (error, req, res, next) => {
    if (error instanceof custom_error_1.CustomError) {
        return res.status(error.statusCode).json(error.getResponse());
    }
    res.status(500).json({
        success: false,
        innerError: error.message,
    });
};
exports.errorHandler = errorHandler;
