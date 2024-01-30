import 'reflect-metadata';

import { app } from './app';

const start = async () => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`server is up and running on port ${PORT}`);
    });
};

start();
