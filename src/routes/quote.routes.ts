import { Router } from 'express';
import { container } from 'tsyringe';
import { QuoteController } from '../controllers/quote.controller';
import { quoteValidation } from '../validations/quote.validation';
import { isAuth } from '../common/middlewares/is-auth.middleware';

const quoteController = container.resolve(QuoteController);
const router = Router();

router.get(
    '/quote',
    quoteValidation.randomQuote,
    isAuth,
    quoteController.getRandomQuote.bind(quoteController),
);

export const quoteRouter = router;
