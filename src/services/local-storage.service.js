export const StorageKeys = {
    LOGIN_DATA: 'login_data',
    PROFILE_DATA: 'profile_data'
};

export class LocalStorageService {
    save(key, data) {
        const value = JSON.stringify(data);
        window.localStorage.setItem(key, value);
    }

    delete(key) {
        window.localStorage.removeItem(key);
    }

    fetch(key) {
        const value = window.localStorage.getItem(key);
        return JSON.parse(value);
    }
}