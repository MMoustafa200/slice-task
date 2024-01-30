"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appBootstrap = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tsyringe_1 = require("tsyringe");
const middlewares_1 = require("./common/middlewares");
const routes_1 = require("./routes");
const appBootstrap = (dbClient) => {
    const app = (0, express_1.default)();
    tsyringe_1.container.register('dbClient', {
        useValue: dbClient,
    });
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(routes_1.v1Router);
    app.all('*', middlewares_1.routeCatcher);
    app.use(middlewares_1.errorHandler);
    return app;
};
exports.appBootstrap = appBootstrap;
