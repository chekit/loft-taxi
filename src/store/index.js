// import { authMiddleware } from './auth';
// import { registerMiddleware } from './register';
import rootReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import { logoutMiddleware } from './logout';
import { profileMiddleware } from './profile';
import createSagaMiddleware from 'redux-saga';
import watchAuthorizeUser from './auth/sagas';
import watchRegisterUser from './register/sagas';

const sagaMiddleware = createSagaMiddleware();

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
        // applyMiddleware(authMiddleware),
        // applyMiddleware(registerMiddleware),
        applyMiddleware(profileMiddleware),
        applyMiddleware(logoutMiddleware),
        //
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    )
);

sagaMiddleware.run(watchAuthorizeUser);
sagaMiddleware.run(watchRegisterUser);

export default store;
