import { handleActions } from 'redux-actions';
import { authUserSuccess } from '../auth';
import { registerUserSuccess } from '../register';

export const userDataReducer = handleActions({
    [authUserSuccess]: (_state, { payload }) => payload,
    [registerUserSuccess]: (_state, { payload }) => payload,
}, { userData: null });