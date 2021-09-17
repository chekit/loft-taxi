import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
    userData: null,
    profileData: null,
    addressList: [],
    currentRoute: [],
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

sagaMiddleware.run(rootSaga);

export default store;
