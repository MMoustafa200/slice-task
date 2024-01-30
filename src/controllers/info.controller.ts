import { injectable } from 'tsyringe';
import { InfoService } from '../services/info.service';
import { NextFunction, Request, Response } from 'express';

@injectable()
export class InfoController {
    constructor(private readonly infoService: InfoService) {}

    async getInfo(req: Request, res: Response, next: NextFunction) {}
}
