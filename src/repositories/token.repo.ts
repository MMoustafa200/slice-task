import { prismaClient } from '../common/utils';
import { injectable } from 'tsyringe';

import { Token } from '@prisma/client';

@injectable()
export class TokenRepository {
    private readonly model;

    constructor() {
        this.model = prismaClient.token;
    }

    async readAll(options?: {
        filter?: Partial<Token>;
        select?: Partial<Record<keyof Token, boolean>>;
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
        filter?: Partial<Token>;
        select?: Partial<Record<keyof Token, boolean>>;
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

    async create(data: Pick<Token, 'user_id' | 'token'>) {
        return await this.model.create({ data });
    }

    async update(id: number, data: Partial<Token>) {
        return await this.model.update({ where: { id }, data });
    }

    async delete(id: number) {
        return await this.model.delete({ where: { id } });
    }

    async count(filter?: Partial<Token>) {
        return await this.model.count({ where: filter });
    }
}
