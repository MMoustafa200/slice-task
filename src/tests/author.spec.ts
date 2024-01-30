import request from 'supertest';
import { appBootstrap } from '../app';

import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

const app = appBootstrap(prismaClient);

describe('Author', async () => {
    afterEach(async () => {
        await prismaClient.token.deleteMany({});
        await prismaClient.user.deleteMany({});
    });

    describe('GET /author', async function () {
        this.timeout(10000);

        it('gets random author after 5 sec', async () => {
            await request(app).post('/register').send({
                email: 'test5@test.com',
                password: '00000000',
                fullname: 'test',
            });

            const response = await request(app).post('/login').send({
                email: 'test5@test.com',
                password: '00000000',
            });

            await request(app)
                .get(`/author?token=${response.body.data.token}`)
                .expect(200);
        });
    });
});
