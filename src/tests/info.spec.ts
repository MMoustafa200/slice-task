import request from 'supertest';
import { appBootstrap } from '../app';

import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

const app = appBootstrap(prismaClient);

describe('Info', async () => {
    describe('GET /info', async () => {
        it('sends the info of the company', async () => {
            request(app).get('/info').expect(200);
        });
    });
});
