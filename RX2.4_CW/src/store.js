import { createStore, applyMiddleware } from 'redux';
import financeReducer from './reducer';
import { thunk } from 'redux-thunk';

//here redux devtools extension not allowed - uncaught error
const store = createStore(financeReducer, applyMiddleware(thunk));

export default store;
