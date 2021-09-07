import { error } from './error.reducer';
import { isLoading } from './loading.reducer';
import { profileData } from './profile-data.reducer';
import { userData } from './user-data.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userData,
    profileData,
    isLoading,
    error
});

export default rootReducer;