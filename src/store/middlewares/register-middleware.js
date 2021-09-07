import { AuthService } from '../../services/auth.service';
import { ActionTypes, registerUserFailure, registerUserSuccess } from '../actions';

export const registerMiddleware = store => next => action => {
    const authService = new AuthService();

    if (action.type === ActionTypes.REGISTER) {
        authService.register(action.payload)
            .then(({ success, error }) => success
                ? store.dispatch(registerUserSuccess(action.payload))
                : store.dispatch(registerUserFailure(error)))
    }

    next(action);
}