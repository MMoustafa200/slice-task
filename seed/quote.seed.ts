import dotenv from 'dotenv';

dotenv.config();

import { prismaClient } from '../src/common/utils';

const seedData = [
    {
        id: 1,
        author_id: 1,
        quote: 'The more you like yourself, the less you are like anyone else, which makes you unique.',
    },
    {
        id: 2,
        author_id: 1,
        quote: "Disneyland is a work of love. We didn't go into Disneyland just with the idea of making money.",
    },
    {
        id: 3,
        author_id: 1,
        quote: 'I always like to look on the optimistic side of life, but I am realistic enough to know that life is a complex matter.',
    },
    {
        id: 4,
        author_id: 2,
        quote: 'The secret of getting ahead is getting started.',
    },
    {
        id: 5,
        author_id: 2,
        quote: 'Part of the secret of a success in life is to eat what you like and let the food fight it out inside.',
    },
    {
        id: 6,
        author_id: 2,
        quote: "You can't depend on your eyes when your imagination is out of focus.",
    },
    {
        id: 7,
        author_id: 3,
        quote: 'Look deep into nature, and then you will understand everything better.',
    },
    {
        id: 8,
        author_id: 3,
        quote: 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.',
    },
    {
        id: 9,
        author_id: 3,
        quote: 'The only source of knowledge is experience.',
    },
];

(async () => {
    try {
        await Promise.all(
            seedData.map(({ id, author_id, quote }) =>
                prismaClient.quote.upsert({
                    where: { id },
                    update: { author_id, quote },
                    create: { id, author_id, quote },
                }),
            ),
        );

        console.log('seed quotes data done successfully');
    } catch (err) {
        console.error(err);
    }
})();
