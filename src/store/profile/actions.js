import { createAction } from '@reduxjs/toolkit';

export const ProfileActionTypes = {
    GET_PROFILE: '[App] Get profile',
    GET_PROFILE_SUCCESS: '[Api] Get profile Success',
    GET_PROFILE_FAILURE: '[Api] Get profile Failure',

    UPDATE_PROFILE: '[App] Update profile',
    UPDATE_PROFILE_SUCCESS: '[Api] Update profile Success',
    UPDATE_PROFILE_FAILURE: '[Api] Update profile Failure',
};

export const getProfileRequest = createAction(ProfileActionTypes.GET_PROFILE);
export const getProfileSuccess = createAction(ProfileActionTypes.GET_PROFILE_SUCCESS);
export const getProfileFailure = createAction(ProfileActionTypes.GET_PROFILE_FAILURE);

export const updateProfileRequest = createAction(ProfileActionTypes.UPDATE_PROFILE);
export const updateProfileSuccess = createAction(ProfileActionTypes.UPDATE_PROFILE_SUCCESS);
export const updateProfileFailure = createAction(ProfileActionTypes.UPDATE_PROFILE_FAILURE);