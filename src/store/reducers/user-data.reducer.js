import { handleActions } from 'redux-actions';
import { authUserFailure, authUserSuccess } from '../auth';
import { logoutRequest } from '../logout';
import { registerUserFailure, registerUserSuccess } from '../register';

export const userDataReducer = handleActions({
    [authUserSuccess]: (_state, { payload }) => payload,
    [authUserFailure]: () => null,
    [registerUserSuccess]: (_state, { payload }) => payload,
    [registerUserFailure]: () => null,
    [logoutRequest]: () => null,
}, { userData: null });