import { createAction } from '@reduxjs/toolkit';

export const ProfileActionTypes = {
    REQUEST_PROFILE: '[App] Request profile',
    REQUEST_PROFILE_SUCCESS: '[Api] Request profile Success',
    REQUEST_PROFILE_FAILURE: '[Api] Request profile Failure',

    UPDATE_PROFILE: '[App] Update profile',
    UPDATE_PROFILE_SUCCESS: '[Api] Update profile Success',
    UPDATE_PROFILE_FAILURE: '[Api] Update profile Failure',
};

export const requestProfile = createAction(ProfileActionTypes.REQUEST_PROFILE);
export const requestProfileSuccess = createAction(ProfileActionTypes.REQUEST_PROFILE_SUCCESS);
export const requestProfileFailure = createAction(ProfileActionTypes.REQUEST_PROFILE_FAILURE);

export const updateProfile = createAction(ProfileActionTypes.UPDATE_PROFILE);
export const updateProfileSuccess = createAction(ProfileActionTypes.UPDATE_PROFILE_SUCCESS);
export const updateProfileFailure = createAction(ProfileActionTypes.UPDATE_PROFILE_FAILURE);