import { handleActions } from 'redux-actions';
import { authUserFailure, authUserRequest } from '../auth';
import { updateProfileFailure, updateProfileRequest } from '../profile';
import { registerUserFailure, registerUserRequest } from '../register';

export const errorReducer = handleActions({
    [authUserRequest]: () => null,
    [authUserFailure]: (_state, { payload }) => payload,
    [updateProfileRequest]: () => null,
    [updateProfileFailure]: (_state, { payload }) => payload,
    [registerUserRequest]: () => null,
    [registerUserFailure]: (_state, { payload }) => payload,
}, {error: null});