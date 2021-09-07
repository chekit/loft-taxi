import { applyMiddleware, compose, createStore } from 'redux'
import { authMiddleware, registerMiddleware } from './middlewares';
import rootReducer from './reducers';

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
