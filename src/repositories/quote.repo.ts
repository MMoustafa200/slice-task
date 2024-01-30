import { inject, injectable } from 'tsyringe';

import { PrismaClient, Quote } from '@prisma/client';

@injectable()
export class QuoteRepository {
    private readonly model;

    constructor(@inject('dbClient') private readonly dbClient: PrismaClient) {
        this.model = dbClient.quote;
    }

    async readAll(options?: {
        filter?: Partial<Quote>;
        select?: Partial<Record<keyof Quote, boolean>>;
        skip?: number;
        take?: number;
    }) {
        return await this.model.findMany({
            where: options?.filter,
            select: options?.select,
            skip: options?.skip,
            take: options?.take,
        });
    }

    async readOne(options?: {
        filter?: Partial<Quote>;
        select?: Partial<Record<keyof Quote, boolean>>;
        skip?: number;
        take?: number;
    }) {
        return await this.model.findFirst({
            where: options?.filter,
            select: options?.select,
            skip: options?.skip,
            take: options?.take,
        });
    }

    async create(data: Pick<Quote, 'author_id' | 'quote'>) {
        return await this.model.create({ data });
    }

    async update(id: number, data: Partial<Quote>) {
        return await this.model.update({ where: { id }, data });
    }

    async delete(id: number) {
        return await this.model.delete({ where: { id } });
    }

    async count(filter?: Partial<Quote>) {
        return await this.model.count({ where: filter });
    }

    async getRandomOne(authorId: number) {
        return (
            (await this.dbClient
                .$queryRaw`SELECT id, author_id, quote FROM quotes WHERE author_id = ${authorId} ORDER BY random() LIMIT 1`) as Partial<Quote>[]
        )[0];
    }
}
