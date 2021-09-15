import { handleActions } from 'redux-actions';
import { authUserFailure, authUserSuccess } from '../auth';
import { logoutSuccess } from '../logout';
import { registerUserFailure, registerUserSuccess } from '../register';

export const userDataReducer = handleActions({
    [authUserSuccess]: (_, { payload }) => payload,
    [authUserFailure]: () => null,
    [registerUserSuccess]: (_, { payload }) => payload,
    [registerUserFailure]: () => null,
    [logoutSuccess]: () => null,
}, { userData: null });