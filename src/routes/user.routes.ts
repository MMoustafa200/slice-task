import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/user.controller';
import { commonValidation } from '../validations/common.validation';
import { isAuth } from '../common/middlewares/is-auth.middleware';

const userController = container.resolve(UserController);
const router = Router();

router.get(
    '/profile',
    commonValidation.token,
    isAuth,
    userController.getProfile.bind(userController),
);

export const userRouter = router;
