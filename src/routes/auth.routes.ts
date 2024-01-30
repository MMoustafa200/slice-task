import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthController } from '../controllers/auth.controller';
import { authValidation } from '../validations/auth.validation';
import { commonValidation } from '../validations/common.validation';
import { isAuth } from '../common/middlewares/is-auth.middleware';

const authController = container.resolve(AuthController);
const router = Router();

router.post(
    '/register',
    authValidation.register,
    authController.register.bind(authController),
);

router.post(
    '/login',
    authValidation.login,
    authController.login.bind(authController),
);

router.delete(
    '/logout',
    commonValidation.token,
    isAuth,
    authController.logout.bind(authController),
);

export const authRouter = router;
