import dotenv from 'dotenv';

dotenv.config();

import { prismaClient } from '../src/common/utils';

const seedData = [
    {
        id: 1,
        name: 'Walt Disney',
    },
    {
        id: 2,
        name: 'Mark Twain',
    },
    {
        id: 3,
        name: 'Albert Einstein',
    },
];

(async () => {
    try {
        await Promise.all(
            seedData.map(({ id, name }) =>
                prismaClient.author.upsert({
                    where: { id },
                    update: { name },
                    create: { id, name },
                }),
            ),
        );
        console.log('seed authors data done successfully');
    } catch (err) {
        console.error(err);
    }
})();
