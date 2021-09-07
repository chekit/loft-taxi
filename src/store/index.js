import { authMiddleware } from './auth';
import rootReducer from './reducers';
import { registerMiddleware } from './register';
import { applyMiddleware, compose, createStore } from 'redux';
import { logoutMiddleware } from './logout';
import { profileMiddleware } from './profile';

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
