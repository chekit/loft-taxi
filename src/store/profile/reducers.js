import { handleActions } from 'redux-actions';
import { requestProfileSuccess, updateProfileSuccess } from './actions';

export const profileDataReducer = handleActions({
    [updateProfileSuccess]: (_, { payload }) => payload,
    [requestProfileSuccess]: (_, { payload }) => payload,
}, { profileData: null });