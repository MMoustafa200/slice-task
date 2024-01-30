import { Router } from 'express';

import { infoRouter } from './info.routes';
import { authRouter } from './auth.routes';
import { userRouter } from './user.routes';
import { authorRouter } from './author.routes';
import { quoteRouter } from './quote.routes';

const router = Router();

router.use(infoRouter);
router.use(authRouter);
router.use(userRouter);
router.use(authorRouter);
router.use(quoteRouter);

export const v1Router = router;
