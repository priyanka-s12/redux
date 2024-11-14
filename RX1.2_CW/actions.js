export const ADD_TODO = 'todo/added';
export const REMOVE_TODO = 'todo/removed';

export const addTodo = (inputText) => ({
  type: ADD_TODO,
  payload: inputText,
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index,
});
