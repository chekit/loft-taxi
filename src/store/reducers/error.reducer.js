import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { authUserFailure } from '../auth';
import { updateProfileFailure } from '../profile';
import { registerUserFailure } from '../register';

export const error = handleActions({
    [authUserFailure]: (_state, { payload }) => payload,
    [updateProfileFailure]: (_state, { payload }) => payload,
    [registerUserFailure]: (_state, { payload }) => payload,
}, null);

export const selectError = createSelector(state => state && state.error);