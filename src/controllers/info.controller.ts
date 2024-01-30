import { injectable } from 'tsyringe';
import { InfoService } from '../services/info.service';
import { NextFunction, Request, Response } from 'express';
import { ProcessResult } from '../common/interfaces';

@injectable()
export class InfoController {
    constructor(private readonly infoService: InfoService) {}

    async getInfo(req: Request, res: Response, next: NextFunction) {
        const info = this.infoService.getCompanyInfo();

        res.status(200).json(<ProcessResult>{
            success: true,
            data: { info },
        });
    }
}
