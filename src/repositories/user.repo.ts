import { prismaClient } from '../common/utils';
import { injectable } from 'tsyringe';

import { User } from '@prisma/client';

@injectable()
export class UserRepository {
    private readonly model;

    constructor() {
        this.model = prismaClient.user;
    }

    async readAll() {
        return await this.model.findMany();
    }

    async readOne(id: number) {
        return await this.model.findUnique({ where: { id } });
    }

    async create(data: User) {
        return await this.model.create({ data });
    }

    async update(id: number, data: User) {
        return await this.model.update({ where: { id }, data });
    }

    async delete(id: number) {
        return await this.model.delete({ where: { id } });
    }
}
