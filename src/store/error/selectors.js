import { createSelector } from 'reselect';

// @TODO: Gix why gives error "TypeError: Cannot read properties of undefined (reading 'isLoading')"
export const selectError = createSelector(state => state.error);