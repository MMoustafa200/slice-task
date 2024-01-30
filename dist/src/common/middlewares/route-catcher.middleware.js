"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCatcher = void 0;
const errors_1 = require("../errors");
const routeCatcher = (req, res, next) => {
    throw new errors_1.NotFoundError('not found');
};
exports.routeCatcher = routeCatcher;
