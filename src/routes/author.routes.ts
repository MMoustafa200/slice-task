import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthorController } from '../controllers/author.controller';
import { commonValidation } from '../validations/common.validation';

const authorController = container.resolve(AuthorController);
const router = Router();

router.get(
    '/author',
    commonValidation.token,
    authorController.getRandomAuthor.bind(authorController),
);

export const authorRouter = router;
