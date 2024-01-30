"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tsyringe_1 = require("tsyringe");
const user_repo_1 = require("../repositories/user.repo");
const token_repo_1 = require("../repositories/token.repo");
const errors_1 = require("../common/errors");
const password_manager_service_1 = require("./password-manager.service");
const jwt_service_1 = require("./jwt.service");
let AuthService = class AuthService {
    constructor(userRepo, tokenRepo, passwordManagerService, jwtService) {
        this.userRepo = userRepo;
        this.tokenRepo = tokenRepo;
        this.passwordManagerService = passwordManagerService;
        this.jwtService = jwtService;
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const existedUser = yield this.userRepo.readOne({
                filter: { email: data.email },
            });
            if (existedUser)
                throw new errors_1.ValidationError('already registered data');
            const hashedPassword = yield this.passwordManagerService.hash(data.password);
            return yield this.userRepo.create(Object.assign(Object.assign({}, data), { password: hashedPassword }));
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = data;
            const user = yield this.userRepo.readOne({ filter: { email } });
            if (!user)
                throw new errors_1.UnauthorizedError('invalid credentials');
            yield this.passwordManagerService.compare(password, user.password);
            const existedToken = yield this.tokenRepo.readOne({
                filter: { user_id: user.id },
            });
            if (existedToken)
                throw new errors_1.BadRequestError('already logged in');
            const token = this.jwtService.generateAccessToken({
                id: user.id,
                email: user.email,
                fullname: user.fullname,
            });
            this.tokenRepo.create({ user_id: user.id, token });
            return token;
        });
    }
    logout(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenRepo.readOne({
                filter: { user_id: userId },
            });
            if (!token)
                throw new errors_1.BadRequestError('not logged in');
            return yield this.tokenRepo.delete(token.id);
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [user_repo_1.UserRepository,
        token_repo_1.TokenRepository,
        password_manager_service_1.PasswordManagerService,
        jwt_service_1.JWTService])
], AuthService);
