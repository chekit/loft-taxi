export class AuthService {
    baseURL = `https://loft-taxi.glitch.me/`;

    async register(data) {
        try {
            const res = await fetch(`${this.baseURL}/register`, {
                method: 'POST',
                body: JSON.stringify(data)
            });

            return await res.json();
        } catch (e) {

        }
    }

    async login(data) {
        try {
            const res = await fetch(`${this.baseURL}/auth`, {
                method: 'POST',
                body: JSON.stringify(data)
            });

            return await res.json();
        } catch (e) {

        }
    }

    logout() { }
}