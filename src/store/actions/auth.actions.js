import { createAction } from '@reduxjs/toolkit';

export const AuthActionTypes = {
    AUTHORIZE: '[App] Authorize user',
    AUTHORIZE_SUCCESS: '[Api] Authorize user Success',
    AUTHORIZE_FAILURE: '[Api] Authorize user Failure',
};

export const authUser = createAction(AuthActionTypes.AUTHORIZE);
export const authUserSuccess = createAction(AuthActionTypes.AUTHORIZE_SUCCESS);
export const authUserFailure = createAction(AuthActionTypes.AUTHORIZE_FAILURE);