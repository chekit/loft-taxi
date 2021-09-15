import { LocalStorageService, AuthService, StorageKeys } from '../../services';
import { AuthActionTypes, authUserFailure, authUserSuccess } from './actions';

export const authMiddleware = store => next => action => {
    const authService = new AuthService();
    const localStorageService = new LocalStorageService();

    if (action.type === AuthActionTypes.AUTHORIZE) {
        // If we are using asyn/wait we are missing AuthActionTypes.AUTHORIZE action in redux history
        authService.login(action.payload)
            .then(({ success, error, token }) => {
                if (success) {
                    localStorageService.save(StorageKeys.LOGIN_DATA, { email: action.payload.email, password: action.payload.password });
                    store.dispatch(authUserSuccess({ ...action.payload, token }));
                }

                if (error) {
                    store.dispatch(authUserFailure(error));
                }
            })
    }

    next(action);
}