import { injectable } from 'tsyringe';

@injectable()
export class InfoService {
    constructor() {}

    getCompanyInfo() {
        const info = 'Some information about the <p>company</p>.';
        return info;
    }
}
