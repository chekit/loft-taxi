import { errorReducer } from './error.reducer';
import { isLoadingReducer } from './loading.reducer';
import { profileDataReducer } from './profile-data.reducer';
import { userDataReducer } from './user-data.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userData: userDataReducer,
    profileData: profileDataReducer,
    isLoading: isLoadingReducer,
    error: errorReducer
});

export default rootReducer;