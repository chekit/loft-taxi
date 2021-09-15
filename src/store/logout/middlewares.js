import { LocalStorageService, StorageKeys } from '../../services';
import { LogoutActionTypes } from './actions';

export const logoutMiddleware = store => next => action => {
    const localStorageService = new LocalStorageService();

    if (action.type === LogoutActionTypes.LOGOUT) {
        localStorageService.delete(StorageKeys.LOGIN_DATA);
    }

    next(action);
}