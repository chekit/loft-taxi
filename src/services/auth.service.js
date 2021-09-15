import { ApiServiceBase } from './api.service.base';

export class AuthService extends ApiServiceBase {
    async register(data) {
        return await this.post('register', JSON.stringify(data));
    }

    async login(data) {
        return await this.post('auth', JSON.stringify(data));
    }
}