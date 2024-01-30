import { prismaClient } from '../common/utils';
import { injectable } from 'tsyringe';

import { Author } from '@prisma/client';

@injectable()
export class AuthorRepository {
    private readonly model;

    constructor() {
        this.model = prismaClient.author;
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
}
