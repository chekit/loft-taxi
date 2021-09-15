import { createSelector } from 'reselect';

export const selectUserData = createSelector(state => state.userData);