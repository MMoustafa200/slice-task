import { prismaClient } from '../common/utils';
import { injectable } from 'tsyringe';

import { Author } from '@prisma/client';

@injectable()
export class AuthorRepository {
    private readonly model;

    constructor() {
        this.model = prismaClient.author;
    }

    async readAll() {
        return await this.model.findMany();
    }

    async readOne(filter: Partial<Author>) {
        return await this.model.findFirst({ where: filter });
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
}
