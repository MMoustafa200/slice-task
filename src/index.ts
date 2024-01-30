import 'reflect-metadata';
import dotenv from 'dotenv';

dotenv.config();

import { app } from './app';

const start = async () => {
    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log(`server is up and running on port ${PORT}`);
    });
};

start();
