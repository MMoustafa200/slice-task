import { prismaClient } from '../common/utils';
import { injectable } from 'tsyringe';

import { User } from '@prisma/client';

@injectable()
export class UserRepository {
    private readonly model;

    constructor() {
        this.model = prismaClient.user;
    }

    async readAll(options?: {
        filter?: Partial<User>;
        select?: Partial<Record<keyof User, boolean>>;
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
        filter?: Partial<User>;
        select?: Partial<Record<keyof User, boolean>>;
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

    async create(data: Pick<User, 'email' | 'password' | 'fullname'>) {
        return await this.model.create({ data });
    }

    async update(id: number, data: Partial<User>) {
        return await this.model.update({ where: { id }, data });
    }

    async delete(id: number) {
        return await this.model.delete({ where: { id } });
    }
}
