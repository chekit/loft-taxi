import { combineReducers } from 'redux';
import { profileData } from './profile-data.reducer';
import { userData } from './user-data.reducer';
import { isLoading } from './loading.reducer';
import { error } from './error.reducer';

const rootReducer = combineReducers({
    userData,
    profileData,
    isLoading,
    error
});

export default rootReducer;