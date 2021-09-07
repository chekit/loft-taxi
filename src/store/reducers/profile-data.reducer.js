import { handleActions } from 'redux-actions';
import { updateProfileSuccess } from '../actions';

export const profileData = handleActions({
    [updateProfileSuccess]: (_state, action) => action.payload
}, null);