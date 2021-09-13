import { handleActions } from 'redux-actions';
import { requestProfileSuccess, updateProfileSuccess } from './actions';

export const profileDataReducer = handleActions({
    [updateProfileSuccess]: (_state, { payload }) => payload,
    [requestProfileSuccess]: (_state, { payload }) => payload,
}, { profileData: null });