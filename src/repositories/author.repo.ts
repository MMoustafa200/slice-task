import { inject, injectable } from 'tsyringe';

import { Author, PrismaClient } from '@prisma/client';

@injectable()
export class AuthorRepository {
    private readonly model;

    constructor(@inject('dbClient') private readonly dbClient: PrismaClient) {
        this.model = dbClient.author;
    }

    async readAll(options?: {
        filter?: Partial<Author>;
        select?: Partial<Record<keyof Author, boolean>>;
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
        filter?: Partial<Author>;
        select?: Partial<Record<keyof Author, boolean>>;
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

    async create(data: Pick<Author, 'name'>) {
        return await this.model.create({ data });
    }

    async update(id: number, data: Partial<Author>) {
        return await this.model.update({ where: { id }, data });
    }

    async delete(id: number) {
        return await this.model.delete({ where: { id } });
    }

    async count(filter?: Partial<Author>) {
        return await this.model.count({ where: filter });
    }

    async getRandomOne() {
        return (
            (await this.dbClient
                .$queryRaw`SELECT id, name FROM authors ORDER BY random() LIMIT 1`) as Partial<Author>[]
        )[0];
    }
}
