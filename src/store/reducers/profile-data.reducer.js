import { handleActions } from 'redux-actions';
import { updateProfileSuccess } from '../profile';

export const profileDataReducer = handleActions({
    [updateProfileSuccess]: (_state, { payload }) => payload
}, { profileData: null });