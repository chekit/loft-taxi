import { handleActions } from 'redux-actions';
import { authUserFailure } from '../auth';
import { updateProfileFailure } from '../profile';
import { registerUserFailure } from '../register';

export const error = handleActions({
    [authUserFailure]: (_state, { payload }) => payload,
    [updateProfileFailure]: (_state, { payload }) => payload,
    [registerUserFailure]: (_state, { payload }) => payload,
}, {error: null});