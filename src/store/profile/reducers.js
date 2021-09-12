import { handleActions } from 'redux-actions';
import { getProfileSuccess, updateProfileSuccess } from './actions';

export const profileDataReducer = handleActions({
    [updateProfileSuccess]: (_state, { payload }) => payload,
    [getProfileSuccess]: (_state, { payload }) => payload,
}, { profileData: null });