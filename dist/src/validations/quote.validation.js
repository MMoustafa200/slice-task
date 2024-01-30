"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const middlewares_1 = require("../common/middlewares");
const enums_1 = require("../common/enums");
const randomQuoteSchema = joi_1.default.object({
    authorId: joi_1.default.number().positive().required(),
    token: joi_1.default.string()
        .trim()
        .regex(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        .required(),
});
exports.quoteValidation = {
    randomQuote: (0, middlewares_1.validateSchema)(randomQuoteSchema, enums_1.ReqField.Query),
};
