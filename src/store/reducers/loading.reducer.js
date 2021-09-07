import { handleActions } from 'redux-actions';
import { authUserRequest, authUserFailure, authUserSuccess, registerUserRequest, registerUserFailure, registerUserSuccess, updateProfileRequest, updateProfileFailure, updateProfileSuccess } from '../actions';

export const isLoading = handleActions({
    [authUserRequest]: () => true,
    [authUserSuccess]: () => false,
    [authUserFailure]: () => false,
    [registerUserRequest]: () => true,
    [registerUserSuccess]: () => false,
    [registerUserFailure]: () => false,
    [updateProfileRequest]: () => true,
    [updateProfileSuccess]: () => false,
    [updateProfileFailure]: () => false,
}, false);