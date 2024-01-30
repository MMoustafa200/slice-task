import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { container } from 'tsyringe';

import { routeCatcher, errorHandler } from './common/middlewares';

const appBootstrap = <T>(dbClient: T) => {
    const app = express();

    container.register<T>('dbClient', {
        useValue: dbClient,
    });

    app.use(cors());
    app.use(express.json());

    const { v1Router } = require('./routes');
    app.use(v1Router);

    app.all('*', routeCatcher);
    app.use(errorHandler);

    return app;
};

export { appBootstrap };
