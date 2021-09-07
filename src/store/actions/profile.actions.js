import { createAction } from '@reduxjs/toolkit';

export const ProfileActionTypes = {
    UPDATE_PROFILE: '[App] Update profile',
    UPDATE_PROFILE_SUCCESS: '[Api] Update profile Success',
    UPDATE_PROFILE_FAILURE: '[Api] Update profile Failure',
};

export const updateProfile = createAction(ProfileActionTypes.UPDATE_PROFILE);
export const updateProfileSuccess = createAction(ProfileActionTypes.UPDATE_PROFILE_SUCCESS);
export const updateProfileFailure = createAction(ProfileActionTypes.UPDATE_PROFILE_FAILURE);