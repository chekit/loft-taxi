import { handleActions } from 'redux-actions';
import { logoutSuccess } from '../logout';
import { requestProfileSuccess, updateProfileSuccess } from './actions';

export const profileDataReducer = handleActions({
    [updateProfileSuccess]: (_, { payload }) => payload,
    [requestProfileSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => null,
}, { profileData: null });