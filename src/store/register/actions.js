import { createAction } from '@reduxjs/toolkit';

export const RegisterActionTypes = {
    REGISTER: '[App] Register user',
    REGISTER_SUCCESS: '[Api] Register user Success',
    REGISTER_FAILURE: '[Api] Register user Failure',
};

export const registerUserRequest = createAction(RegisterActionTypes.REGISTER);
export const registerUserSuccess = createAction(RegisterActionTypes.REGISTER_SUCCESS);
export const registerUserFailure = createAction(RegisterActionTypes.REGISTER_FAILURE);