import { createStore } from 'redux';
import todoReducer from './todoReducer';
import { addTodo, removeTodo } from './actions';

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
  updatedList();
});

const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

const addTodoHandler = () => {
  const inputValue = todoInput.value;
  if (inputValue) {
    // store.dispatch({ type: "todo/added", payload: inputValue });
    store.dispatch(addTodo(inputValue));
  }
};

window.removeTodoHandler = (index) => {
  //   store.dispatch({ type: "todo/removed", payload: index });
  store.dispatch(removeTodo(index));
};

const updatedList = () => {
  //get the initial state then append value
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map(
      (todo, index) =>
        `<li>${todo} <button onClick = "removeTodoHandler(${index})">Remove</button></li>`
    )
    .join('');
};

addBtn.addEventListener('click', addTodoHandler);
updatedList();

console.log(store.getState());

// store.dispatch({ type: "todo/added", payload: "make poha" });
// console.log(store.getState());
// store.dispatch({ type: "todo/added", payload: "read" });
// console.log(store.getState());
