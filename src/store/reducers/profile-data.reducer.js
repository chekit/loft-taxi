import { handleActions } from 'redux-actions';
import { updateProfileSuccess } from '../profile';

export const profileData = handleActions({
    [updateProfileSuccess]: (_state, { payload }) => payload
}, null);