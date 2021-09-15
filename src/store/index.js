import { authMiddleware } from './auth';
import { registerMiddleware } from './register';
import { applyMiddleware, compose, createStore } from 'redux';
import { logoutMiddleware } from './logout';
import { profileMiddleware } from './profile';
import rootReducer from './reducer';

const initialState = {
    userData: null,
    profileData: null,
    error: null,
    isLoading: false,
    isLoggedIn: false
};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(registerMiddleware),
        applyMiddleware(profileMiddleware),
        applyMiddleware(logoutMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    )
);

export default store;
