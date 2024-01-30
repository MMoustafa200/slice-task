import { inject, injectable } from 'tsyringe';
import { PrismaClient, User } from '@prisma/client';

@injectable()
export class UserRepository {
    private readonly model;

    constructor(@inject('dbClient') private readonly dbClient: PrismaClient) {
        this.model = dbClient.user;
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

    async count(filter?: Partial<User>) {
        return await this.model.count({ where: filter });
    }
}
