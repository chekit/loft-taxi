export class AuthService {
    baseURL = `https://loft-taxi.glitch.me`;

    async register(data) {
        return await this.post('register', JSON.stringify(data));
    }

    async login(data) {
        return await this.post('auth', JSON.stringify(data));
    }

    async post(uri, body) {
        try {
            const res = await fetch(`${this.baseURL}/${uri}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });

            return await res.json();
        } catch (e) {
            return { success: false, error: e.message };
        }
    }
}