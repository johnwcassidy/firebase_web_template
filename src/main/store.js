import { applyMiddleware, createStore } from 'redux';
import reducers from './reducer';

const middleware = applyMiddleware();
const store = createStore(reducers, middleware);

export default store;
