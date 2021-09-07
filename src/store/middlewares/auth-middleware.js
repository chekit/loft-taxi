import { AuthService } from '../../services/auth.service';
import { ActionTypes, authUserFailure, authUserSuccess } from '../actions';

export const authMiddleware = store => next => action => {
    const authService = new AuthService();

    if (action.type === ActionTypes.AUTHORIZE) {
        authService.login(action.payload)
            .then(({ success, error }) => success
                ? store.dispatch(authUserSuccess(action.payload))
                : store.dispatch(authUserFailure(error)))
    }

    next(action);
}