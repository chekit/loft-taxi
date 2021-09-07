import { handleActions } from 'redux-actions';
import { authUser, authUserFailure, authUserSuccess, registerUser, registerUserFailure, registerUserSuccess, updateProfile, updateProfileFailure, updateProfileSuccess } from '../actions';

export const isLoading = handleActions({
    [authUser]: () => true,
    [authUserSuccess]: () => false,
    [authUserFailure]: () => false,
    [registerUser]: () => true,
    [registerUserSuccess]: () => false,
    [registerUserFailure]: () => false,
    [updateProfile]: () => true,
    [updateProfileSuccess]: () => false,
    [updateProfileFailure]: () => false,
}, false);