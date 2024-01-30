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
exports.QuoteRepository = void 0;
const tsyringe_1 = require("tsyringe");
const utils_1 = require("../common/utils");
let QuoteRepository = class QuoteRepository {
    constructor() {
        this.model = utils_1.prismaClient.quote;
    }
    readAll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findMany({
                where: options === null || options === void 0 ? void 0 : options.filter,
                select: options === null || options === void 0 ? void 0 : options.select,
                skip: options === null || options === void 0 ? void 0 : options.skip,
                take: options === null || options === void 0 ? void 0 : options.take,
            });
        });
    }
    readOne(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findFirst({
                where: options === null || options === void 0 ? void 0 : options.filter,
                select: options === null || options === void 0 ? void 0 : options.select,
                skip: options === null || options === void 0 ? void 0 : options.skip,
                take: options === null || options === void 0 ? void 0 : options.take,
            });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create({ data });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.update({ where: { id }, data });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.delete({ where: { id } });
        });
    }
    count(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.count({ where: filter });
        });
    }
    getRandomOne(authorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield utils_1.prismaClient.$queryRaw `SELECT * FROM quotes WHERE author_id = ${authorId} ORDER BY random() LIMIT 1`;
        });
    }
};
exports.QuoteRepository = QuoteRepository;
exports.QuoteRepository = QuoteRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], QuoteRepository);