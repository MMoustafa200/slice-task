import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthorController } from '../controllers/author.controller';

const authorController = container.resolve(AuthorController);
const router = Router();

router.get('/author', authorController.getRandomAuthor);

export const authorRouter = router;
