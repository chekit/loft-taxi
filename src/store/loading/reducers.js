import { handleActions } from 'redux-actions';
import { authUserFailure, authUserRequest, authUserSuccess } from '../auth';
import { updateProfileFailure, updateProfileRequest, updateProfileSuccess } from '../profile';
import { registerUserFailure, registerUserRequest, registerUserSuccess } from '../register';

export const isLoadingReducer = handleActions({
    [authUserRequest]: () => true,
    [authUserSuccess]: () => false,
    [authUserFailure]: () => false,
    [registerUserRequest]: () => true,
    [registerUserSuccess]: () => false,
    [registerUserFailure]: () => false,
    [updateProfileRequest]: () => true,
    [updateProfileSuccess]: () => false,
    [updateProfileFailure]: () => false,
}, { isLoading: false });