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

    async readOne(
        filter: Partial<Quote>,
        select?: Partial<Record<keyof Quote, boolean>>,
    ) {
        return await this.model.findFirst({ where: filter, select });
    }

    async create(data: Pick<Quote, 'authorId' | 'quote'>) {
        return await this.model.create({ data });
    }

    async update(id: number, data: Partial<Quote>) {
        return await this.model.update({ where: { id }, data });
    }

    async delete(id: number) {
        return await this.model.delete({ where: { id } });
    }
}
