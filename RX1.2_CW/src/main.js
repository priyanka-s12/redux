import { createStore } from 'redux';
import todoReducer from './todoReducer';

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
  updateTodo();
});

// store.dispatch({ type: 'ADD_TODO', payload: 'Make a poha' });
// store.dispatch({ type: 'ADD_TODO', payload: 'Make a upma' });

const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

const addTaskHandler = () => {
  const todo = todoInput.value;
  if (todo) {
    store.dispatch({ type: 'ADD_TODO', payload: todo });
  }
};
addBtn.addEventListener('click', addTaskHandler);

window.removeTodoHandler = (index) => {
  store.dispatch({ type: 'REMOVE_TODO', payload: index });
};
const updateTodo = () => {
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li>${todo} <button onClick="removeTodoHandler(${index})">Remove</button></li>`;
    })
    .join('');
};

updateTodo();
