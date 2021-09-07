import { createSelector } from 'reselect';

export const selectUserData = createSelector(state => state.userData);
export const selectIsLoading = createSelector(state => state.isLoading);
export const selectError = createSelector(state => state.error);