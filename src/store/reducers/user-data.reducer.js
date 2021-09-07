import { handleActions } from 'redux-actions';
import { authUserSuccess, registerUserSuccess } from '../actions';

export const userData = handleActions({
    [authUserSuccess]: (_state, action) => action.payload,
    [registerUserSuccess]: (_state, action) => action.payload,
}, null);