import { ApiServiceBase } from './api.service.base';

export class ProfileService extends ApiServiceBase {
    async saveCardData(data) {
        return await this.post('card', JSON.stringify(data));
    }

    async getCardData(token) {
        return await this.get(`card?token=${token}`);
    }
}