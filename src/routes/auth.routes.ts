import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthController } from '../controllers/auth.controller';

const authController = container.resolve(AuthController);
const router = Router();

router.post('/register', authController.register.bind(authController));

router.post('/login', authController.login.bind(authController));

router.delete('/logout', authController.logout.bind(authController));

export const authRouter = router;
