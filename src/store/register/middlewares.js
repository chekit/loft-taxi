import { LocalStorageService, StorageKeys } from '../../services';
import { AuthService } from '../../services/auth.service';
import { RegisterActionTypes, registerUserFailure, registerUserSuccess } from './actions';

export const registerMiddleware = store => next => action => {
    const authService = new AuthService();
    const localStorageService = new LocalStorageService();

    if (action.type === RegisterActionTypes.REGISTER) {
        // If we are using asyn/wait we are missing RegisterActionTypes.REGISTER action in redux history
        authService.register(action.payload)
            .then(({ success, token, error }) => {
                if (success) {
                    localStorageService.save(StorageKeys.LOGIN_DATA, { email: action.payload.email, password: action.payload.password });
                    store.dispatch(registerUserSuccess({ ...action.payload, token }));
                }

                if (error) {
                    store.dispatch(registerUserFailure(error));
                }
            })
    }

    next(action);
}