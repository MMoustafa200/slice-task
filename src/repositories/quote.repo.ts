import { injectable } from 'tsyringe';
import { prismaClient } from '../common/utils';

import { Quote } from '@prisma/client';

@injectable()
export class QuoteRepository {
    private readonly model;

    constructor() {
        this.model = prismaClient.quote;
    }

    async readAll() {
        return await this.model.findMany();
    }

    async readOne(id: number) {
        return await this.model.findUnique({ where: { id } });
    }

    async create(data: Quote) {
        return await this.model.create({ data });
    }

    async update(id: number, data: Quote) {
        return await this.model.update({ where: { id }, data });
    }

    async delete(id: number) {
        return await this.model.delete({ where: { id } });
    }
}
