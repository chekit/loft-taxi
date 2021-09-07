import { LocalStorageService, AuthService, StorageKeys } from '../../services';
import { AuthActionTypes, authUserFailure, authUserSuccess } from './actions';

export const authMiddleware = store => next => action => {
    const authService = new AuthService();
    const localStorageService = new LocalStorageService();

    if (action.type === AuthActionTypes.AUTHORIZE) {
        authService.login(action.payload)
            .then(({ success, error }) => {
                if (success) {
                    localStorageService.save(StorageKeys.LOGIN_DATA, { email: action.payload.email, password: action.payload.password });
                    store.dispatch(authUserSuccess(action.payload));
                }

                if (error) {
                    store.dispatch(authUserFailure(error));
                }
            })
    }

    next(action);
}