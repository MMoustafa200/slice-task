import { Router } from 'express';
import { container } from 'tsyringe';
import { InfoController } from '../controllers/info.controller';

const infoController = container.resolve(InfoController);
const router = Router();

router.get('/info', infoController.getInfo.bind(infoController));

export const infoRouter = router;
