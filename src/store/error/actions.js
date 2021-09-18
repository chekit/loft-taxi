import { createAction } from '@reduxjs/toolkit';

export const ErrorActionTypes = {
    RESET: '[App] Reset Error',
};

export const resetErrorRequest = createAction(ErrorActionTypes.RESET);
