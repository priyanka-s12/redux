import { createStore } from 'redux';
import cookieReducer from './cookieReducer';

const store = createStore(cookieReducer);

store.subscribe(() => {
  console.log(store.getState());
  updatedCookie();
});

const addCookie = document.querySelector('#addCookie');
const removeCookie = document.querySelector('#removeCookie');
const cookieCount = document.querySelector('#cookieCount');

const addCookieHandler = () => {
  store.dispatch({ type: 'cookie/added' });
};

const removeCookieHandler = () => {
  store.dispatch({ type: 'cookie/removed' });
};

const updatedCookie = () => {
  const state = store.getState();
  cookieCount.textContent = state.value;
};

addCookie.addEventListener('click', addCookieHandler);
removeCookie.addEventListener('click', removeCookieHandler);

updatedCookie();
// console.log(store);
// store.dispatch({ type: "cookie/added" });
// console.log(store.getState());
// store.dispatch({ type: "cookie/removed" });
// console.log(store.getState());
// store.dispatch({ type: "dfsdf" });
// console.log(store.getState());
