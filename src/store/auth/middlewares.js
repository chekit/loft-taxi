import { AuthService } from '../../services/auth.service';
import { AuthActionTypes, authUserFailure, authUserSuccess } from './actions';

export const authMiddleware = store => next => action => {
    const authService = new AuthService();

    if (action.type === AuthActionTypes.AUTHORIZE) {
        authService.login(action.payload)
            .then(({ success, error }) => success
                ? store.dispatch(authUserSuccess(action.payload))
                : store.dispatch(authUserFailure(error)))
    }

    next(action);
}