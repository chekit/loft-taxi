import { combineReducers } from 'redux';

import { isLoadingReducer } from './loading';
import { profileDataReducer } from './profile';
import { userDataReducer } from './auth';
import { isLoggedInReducer } from './logout';
import { errorReducer } from './error';

const rootReducer = combineReducers({
    userData: userDataReducer,
    profileData: profileDataReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
    isLoggedIn: isLoggedInReducer,
});

export default rootReducer;