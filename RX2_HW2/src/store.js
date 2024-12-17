import { createStore, applyMiddleware } from 'redux';
import bookReducer from './bookReducer';
import loggerMiddleware from './loggerMiddleware';

const store = createStore(bookReducer, applyMiddleware(loggerMiddleware));

export default store;
