import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthController } from '../controllers/auth.controller';

const authController = container.resolve(AuthController);
const router = Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.delete('/logout', authController.logout);

export const authRouter = router;
