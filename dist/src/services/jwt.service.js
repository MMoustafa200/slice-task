"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../common/errors");
class JWTService {
    constructor() { }
    generateAccessToken(data) {
        const accessToken = jsonwebtoken_1.default.sign(data, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 8,
        });
        return accessToken;
    }
    decodeToken(token, secret) {
        try {
            const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            return decodedToken;
        }
        catch (err) {
            throw new errors_1.UnauthorizedError(err.message);
        }
    }
}
exports.JWTService = JWTService;
