import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { authUserSuccess } from '../auth';
import { registerUserSuccess } from '../register';

export const userData = handleActions({
    [authUserSuccess]: (_state, { payload }) => payload,
    [registerUserSuccess]: (_state, { payload }) => payload,
}, null);

export const selectUserData = createSelector(state => state && state.userData);