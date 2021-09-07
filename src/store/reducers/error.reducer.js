import { handleActions } from 'redux-actions';
import { authUserFailure, registerUserFailure, updateProfileFailure } from '../actions';

export const error = handleActions({
    [authUserFailure]: (_state, action) => action.payload,
    [updateProfileFailure]: (_state, action) => action.payload,
    [registerUserFailure]: (_state, action) => action.payload,
}, null);