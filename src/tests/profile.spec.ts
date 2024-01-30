import request from 'supertest';
import { appBootstrap } from '../app';

import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

const app = appBootstrap(prismaClient);

describe('Profile', async () => {
    afterEach(async () => {
        await prismaClient.token.deleteMany({});
        await prismaClient.user.deleteMany({});
    });

    describe('GET /profile', async () => {
        it('gets the user profile if he logged in', async () => {
            await request(app).post('/register').send({
                email: 'test@test.com',
                password: '00000000',
                fullname: 'test',
            });

            const response = await request(app).post('/login').send({
                email: 'test@test.com',
                password: '00000000',
            });

            await request(app)
                .get(`/profile?token=${response.body.data.token}`)
                .expect(200);
        });

        it('fails if there is no token supplied', async () => {
            await request(app).get(`/profile?token=`).expect(422);
        });

        it('fails if the user is not authenticated', async () => {
            await request(app)
                .get(
                    `/profile?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODcsImVtYWlsIjoibS5tb3VzdGFmYS5tMjFAZ21haWwuY29tIiwiZnVsbG5hbWUiOiJNb2hhbWVkIE1vdXN0YWZhIiwiaWF0IjoxNzA2NjM3MTc5LCJleHAiOjE3MDY2NjU5Nzl9.PR0O55ha5JFPHLf3sNOtLwwne_ZcXXjG_sjRgFlFsZY`,
                )
                .expect(401);
        });
    });
});
