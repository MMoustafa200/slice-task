import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthorController } from '../controllers/author.controller';
import { commonValidation } from '../validations/common.validation';
import { isAuth } from '../common/middlewares/is-auth.middleware';

const authorController = container.resolve(AuthorController);
const router = Router();

router.get(
    '/author',
    commonValidation.token,
    isAuth,
    authorController.getRandomAuthor.bind(authorController),
);

export const authorRouter = router;
