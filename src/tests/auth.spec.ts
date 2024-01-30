import request from 'supertest';
import { appBootstrap } from '../app';

import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

const app = appBootstrap(prismaClient);

describe('Authentication', async () => {
    afterEach(async () => {
        await prismaClient.token.deleteMany({});
        await prismaClient.user.deleteMany({});
    });

    describe('POST /register', async () => {
        it('registers new user', async () => {
            await request(app)
                .post('/register')
                .send({
                    email: 'test1@test.com',
                    password: '00000000',
                    fullname: 'test',
                })
                .expect(201);
        });

        it('fails on already registered emails', async () => {
            await request(app).post('/register').send({
                email: 'test2@test.com',
                password: '00000000',
                fullname: 'test',
            });

            await request(app)
                .post('/register')
                .send({
                    email: 'test2@test.com',
                    password: '00000000',
                    fullname: 'test',
                })
                .expect(422);
        });
    });

    describe('POST /login', async () => {
        it('successfully login with the correct credentials', async () => {
            await request(app).post('/register').send({
                email: 'test1@test.com',
                password: '00000000',
                fullname: 'test',
            });

            await request(app)
                .post('/login')
                .send({
                    email: 'test1@test.com',
                    password: '00000000',
                })
                .expect(200);
        });

        it('returns unauthorized with incorrect credentials', async () => {
            await request(app)
                .post('/login')
                .send({
                    email: 'random@random.com',
                    password: '00000000',
                })
                .expect(401);
        });

        it('fails if you already logged in', async () => {
            await request(app).post('/register').send({
                email: 'test1@test.com',
                password: '00000000',
                fullname: 'test',
            });

            await request(app).post('/login').send({
                email: 'test1@test.com',
                password: '00000000',
            });

            await request(app)
                .post('/login')
                .send({
                    email: 'test1@test.com',
                    password: '00000000',
                })
                .expect(400);
        });
    });

    describe('DELETE /logout', async () => {
        it('logs out successfully if you was logged in', async () => {
            await request(app).post('/register').send({
                email: 'test3@test.com',
                password: '00000000',
                fullname: 'test',
            });

            const response = await request(app).post('/login').send({
                email: 'test3@test.com',
                password: '00000000',
            });

            await request(app)
                .delete(`/logout?token=${response.body.data.token}`)
                .expect(200);
        });

        it('fails if there is no token supplied', async () => {
            await request(app).delete(`/logout?token=`).expect(422);
        });
    });
});
