import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/user.controller';

const userController = container.resolve(UserController);
const router = Router();

router.get('/profile', userController.getProfile);

export const userRouter = router;
