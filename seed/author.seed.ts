import dotenv from 'dotenv';

dotenv.config();

import { prismaClient } from '../src/common/utils';

(async () => {
    try {
        await prismaClient.author.createMany({
            data: [
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
            ],
        });

        console.log('seed authors data done successfully');
    } catch (err) {
        console.error(err);
    }
})();
