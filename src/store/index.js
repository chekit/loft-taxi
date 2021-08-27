import { createStore } from 'redux'
import loftTaxi from './reducers';

const store = createStore(loftTaxi);

export default store;
