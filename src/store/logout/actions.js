import { createAction } from '@reduxjs/toolkit';

export const LogoutActionTypes = {
    LOGOUT: '[App] Logout',
    LOGOUT_SUCCESS: '[App] Logout Success',
};

export const logoutRequest = createAction(LogoutActionTypes.LOGOUT);
export const logoutSuccess = createAction(LogoutActionTypes.LOGOUT_SUCCESS);