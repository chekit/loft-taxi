import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';

import { watchAuthorizeUser } from './auth';
import { watchRegisterUser } from './register';
import { watchGetProfileData, watchProfileUpdate } from './profile';
import { watchLogout } from './logout';
import { watchAddressList } from './addressList';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
    userData: null,
    profileData: null,
    addressList: null,
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
sagaMiddleware.run(watchAddressList);
sagaMiddleware.run(watchLogout);

export default store;
