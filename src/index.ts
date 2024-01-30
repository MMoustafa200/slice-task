import dotenv from 'dotenv';

dotenv.config();

import { PrismaClient } from '@prisma/client';
import { appBootstrap } from './app';
import { prismaClient } from './common/utils';

const start = async () => {
    const PORT = process.env.PORT;

    const app = appBootstrap<PrismaClient>(prismaClient);

    app.listen(PORT, () => {
        console.log(`server is up and running on port ${PORT}`);
    });
};

start();
