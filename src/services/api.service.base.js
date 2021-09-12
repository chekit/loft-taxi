export class ApiServiceBase {
    baseApiURL = `https://loft-taxi.glitch.me`;

    async post(uri, body) {
        try {
            const res = await fetch(`${this.baseApiURL}/${uri}`, {
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

    async get(uri) {
        try {
            const res = await fetch(`${this.baseApiURL}/${uri}`, {
                method: 'GET',
            });

            return await res.json();
        } catch (e) {
            return { success: false, error: e.message };
        }
    }
}