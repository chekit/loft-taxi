import { handleActions } from 'redux-actions';
import { authUserSuccess } from '../auth';
import { logoutRequest } from '../logout/actions';
import { registerUserSuccess } from '../register';

export const isLoggedInReducer = handleActions({
    [authUserSuccess]: () => true,
    [registerUserSuccess]: () => true,
    [logoutRequest]: () => false,
}, { isLoggedIn: false });