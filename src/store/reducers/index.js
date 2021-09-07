import { combineReducers } from 'redux';
import { profileData } from './profile-data.reducer';
import { userData } from './user-data.reducer';
import { isLoading } from './loading.reducer';
import { error } from './error.reducer';
import { createSelector } from 'reselect';

const rootReducer = combineReducers({
    userData,
    profileData,
    isLoading,
    error
});

export const selectUserData = createSelector(state => state.userData);
export const selectIsLoading = createSelector(state => state.isLoading);
export const selectError = createSelector(state => state.error);

export default rootReducer;