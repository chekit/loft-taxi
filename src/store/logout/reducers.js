import { handleActions } from 'redux-actions';
import { logoutSuccess } from './actions';
import { authUserSuccess } from '../auth';
import { registerUserSuccess } from '../register';

export const isLoggedInReducer = handleActions({
    [authUserSuccess]: () => true,
    [registerUserSuccess]: () => true,
    [logoutSuccess]: () => false,
}, { isLoggedIn: false });