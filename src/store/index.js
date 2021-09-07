import { authMiddleware } from './auth';
import rootReducer from './reducers';
import { registerMiddleware } from './register';
import { applyMiddleware, compose, createStore } from 'redux';

const initialState = {
    userData: null,
    profileData: null,
    error: null,
    isLoading: false
};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(registerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    )
);

export default store;
