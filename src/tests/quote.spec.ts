import request from 'supertest';
import { appBootstrap } from '../app';

import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

const app = appBootstrap(prismaClient);

describe('Quote', async () => {
    afterEach(async () => {
        await prismaClient.token.deleteMany({});
        await prismaClient.user.deleteMany({});
    });

    describe('GET /quote', async function () {
        this.timeout(10000);

        it('gets random quote after 5 sec', async () => {
            await request(app).post('/register').send({
                email: 'test6@test.com',
                password: '00000000',
                fullname: 'test',
            });

            const response = await request(app).post('/login').send({
                email: 'test6@test.com',
                password: '00000000',
            });

            await request(app)
                .get(`/quote?authorId=1&token=${response.body.data.token}`)
                .expect(200);
        });
    });
});
