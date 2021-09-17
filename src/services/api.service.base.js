export const api = ((baseApiURL) => {
    const post = async (uri, body) => {
        try {
            const res = await fetch(`${baseApiURL}/${uri}`, {
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

    const get = async uri => {
        try {
            const res = await fetch(`${baseApiURL}/${uri}`, {
                method: 'GET',
            });

            return await res.json();
        } catch (e) {
            return { success: false, error: e.message };
        }
    }

    return { post, get };
})(`https://loft-taxi.glitch.me`);