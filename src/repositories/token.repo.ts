import { prismaClient } from '../common/utils';
import { injectable } from 'tsyringe';

import { Token } from '@prisma/client';

@injectable()
export class TokenRepository {
    private readonly model;

    constructor() {
        this.model = prismaClient.token;
    }

    async readAll() {
        return await this.model.findMany();
    }

    async readOne(filter: Partial<Token>) {
        return await this.model.findFirst({ where: filter });
    }

    async create(data: Pick<Token, 'userId' | 'token'>) {
        return await this.model.create({ data });
    }

    async update(id: number, data: Partial<Token>) {
        return await this.model.update({ where: { id }, data });
    }

    async delete(id: number) {
        return await this.model.delete({ where: { id } });
    }
}
