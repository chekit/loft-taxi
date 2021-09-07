import { applyMiddleware, compose, createStore } from 'redux'
import { authMiddleware } from './middlewares';
import { registerMiddleware } from './middlewares/register-middleware';
import loftTaxi from './reducers';

const store = createStore(
    loftTaxi,
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(registerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    )
);

export default store;
