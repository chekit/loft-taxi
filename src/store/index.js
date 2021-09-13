import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchAuthorizeUser } from './auth';
import { watchRegisterUser } from './register';
import rootReducer from './reducer';
import { watchGetProfileData, watchProfileUpdate } from './profile';
import { watchLogout } from './logout';

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
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    )
);

sagaMiddleware.run(watchAuthorizeUser);
sagaMiddleware.run(watchRegisterUser);
sagaMiddleware.run(watchProfileUpdate);
sagaMiddleware.run(watchGetProfileData);
sagaMiddleware.run(watchLogout);

export default store;
