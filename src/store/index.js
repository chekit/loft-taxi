import { applyMiddleware, compose, createStore } from 'redux'
import { authMiddleware } from './middlewares';
import loftTaxi from './reducers';

const store = createStore(
    loftTaxi,
    compose(
        applyMiddleware(authMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
