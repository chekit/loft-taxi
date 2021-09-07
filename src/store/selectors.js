import { createSelector } from 'reselect';

// @TODO: Gix why gives error "TypeError: Cannot read properties of undefined (reading 'isLoading')"
export const selectUserData = createSelector(state => state.userData);
export const selectIsLoading = createSelector(state => state.isLoading);
export const selectError = createSelector(state => state.error);
export const selectIsLoggedIn = createSelector(state => state.isLoggedIn);