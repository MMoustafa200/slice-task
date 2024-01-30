import { Router } from 'express';
import { container } from 'tsyringe';
import { QuoteController } from '../controllers/quote.controller';

const quoteController = container.resolve(QuoteController);
const router = Router();

router.get('/quote', quoteController.getRandomQuote);

export const quoteRouter = router;
