import { createSelector } from 'reselect';

// @TODO: Gix why gives error "TypeError: Cannot read properties of undefined (reading 'isLoading')"
export const selectIsLoading = createSelector(state => state.isLoading);