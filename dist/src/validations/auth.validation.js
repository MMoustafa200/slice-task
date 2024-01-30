"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const middlewares_1 = require("../common/middlewares");
const enums_1 = require("../common/enums");
const registerSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
    fullname: joi_1.default.string().min(3).required(),
});
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
});
const logoutSchema = joi_1.default.object({
    token: joi_1.default.string()
        .trim()
        .regex(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        .required(),
});
exports.authValidation = {
    register: (0, middlewares_1.validateSchema)(registerSchema, enums_1.ReqField.Body),
    login: (0, middlewares_1.validateSchema)(loginSchema, enums_1.ReqField.Body),
    logout: (0, middlewares_1.validateSchema)(logoutSchema, enums_1.ReqField.Query),
};
