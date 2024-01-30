import express from 'express';
import cors from 'cors';

import { routeCatcher, errorHandler } from './common/middlewares';

import { v1Router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', v1Router);

app.all('*', routeCatcher);
app.use(errorHandler);

export { app };
