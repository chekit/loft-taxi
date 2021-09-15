import { createAction } from '@reduxjs/toolkit';

export const LogoutActionTypes = {
    LOGOUT: '[App] Logout',
};

export const logoutRequest = createAction(LogoutActionTypes.LOGOUT);