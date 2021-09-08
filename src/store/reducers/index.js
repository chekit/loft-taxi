import { errorReducer } from './error.reducer';
import { isLoadingReducer } from './loading.reducer';
import { profileDataReducer } from './profile-data.reducer';
import { userDataReducer } from './user-data.reducer';
import { combineReducers } from 'redux';
import { isLoggedInReducer } from './logged-in.reducer';

const rootReducer = combineReducers({
    userData: userDataReducer,
    profileData: profileDataReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
    isLoggedIn: isLoggedInReducer,
});

export default rootReducer;