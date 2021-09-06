import { createAction } from '@reduxjs/toolkit';

export const ActionTypes = {
    AUTHORIZE: '[App] Authorize user',
    AUTHORIZE_SUCCESS: '[Api] Authorize user Success',
    AUTHORIZE_FAILURE: '[Api] Authorize user Failure',

    REGISTER: '[App] Register user',
    REGISTER_SUCCESS: '[Api] Register user Success',
    REGISTER_FAILURE: '[Api] Register user Failure',

    UPDATE_PROFILE: '[App] Update profile',
    UPDATE_PROFILE_SUCCESS: '[Api] Update profile Success',
    UPDATE_PROFILE_FAILURE: '[Api] Update profile Failure',
};

// Auth User actions
export const authUser = createAction(ActionTypes.AUTHORIZE);
export const authUserSuccess = createAction(ActionTypes.AUTHORIZE_SUCCESS);
export const authUserFailure = createAction(ActionTypes.AUTHORIZE_FAILURE);

// Register User actions
export const registerUser = createAction(ActionTypes.REGISTER);
export const registerUserSuccess = createAction(ActionTypes.REGISTER_SUCCESS);
export const registerUserFailure = createAction(ActionTypes.REGISTER_FAILURE);

// Update Profile actions
export const updateProfile = createAction(ActionTypes.UPDATE_PROFILE);
export const updateProfileSuccess = createAction(ActionTypes.UPDATE_PROFILE_SUCCESS);
export const updateProfileFailure = createAction(ActionTypes.UPDATE_PROFILE_FAILURE);