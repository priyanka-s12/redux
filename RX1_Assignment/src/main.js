import { createStore } from 'redux';
import taskReducer from './taskReducer';
// import {
//   ADD_TASK,
//   REMOVE_TASK,
//   TOGGLE_TASK,
//   CALCULATE_TOTAL_TASKS,
// } from './actions';

import {
  addTask,
  removeTask,
  toggleTask,
  calculateTotalTasks,
} from './actions';
const store = createStore(taskReducer);

store.subscribe(() => {
  console.log(store.getState());
  renderTasks();
});

const taskName = document.querySelector('#taskName');
const taskDescription = document.querySelector('#taskDescription');
const addTaskBtn = document.querySelector('#addTaskBtn');

const taskId = document.querySelector('#taskId');
const removeTaskBtn = document.querySelector('#removeTaskBtn');

const taskList = document.querySelector('#taskList');
const total = document.querySelector('#total');

const addTaskHandler = () => {
  const state = store.getState();
  const taskObj = {
    id: state.tasks.length + 1,
    name: taskName.value,
    description: taskDescription.value,
    completed: false,
  };

  // const { taskName, taskDescription } = taskObj;
  if (taskObj.name && taskObj.description) {
    store.dispatch(addTask(taskObj));
    store.dispatch(calculateTotalTasks());
  }
};

const removeTaskHandler = () => {
  const id = taskId.value;
  store.dispatch(removeTask(id));
  store.dispatch(calculateTotalTasks());
};

window.handleStatus = (id) => {
  store.dispatch(toggleTask(id));
};

addTaskBtn.addEventListener('click', addTaskHandler);
removeTaskBtn.addEventListener('click', removeTaskHandler);

const renderTasks = () => {
  const state = store.getState();
  taskList.innerHTML = state.tasks
    .map(
      (task) =>
        `<li><input type="checkbox" name="completed" ${
          task.completed ? 'checked' : ''
        } onChange={handleStatus(${task.id})} />${task.id}. ${task.name}: ${
          task.description
        } ${task.completed ? ': Completed' : ''}</li>`
    )
    .join('');

  total.textContent = `Total Tasks: ${state.totalTasks}`;
};

renderTasks();
// store.dispatch({
//   type: ADD_TASK,
//   payload: {
//     id: 1,
//     taskName: 'Put labels',
//     taskDescription: 'Put label on new notebook',
//     completed: false,
//   },
// });
// store.dispatch({ type: CALCULATE_TOTAL_TASKS });
// store.dispatch({
//   type: ADD_TASK,
//   payload: {
//     id: 2,
//     taskName: 'Put labels',
//     taskDescription: 'Put label on new notebook',
//     completed: true,
//   },
// });
// store.dispatch({ type: CALCULATE_TOTAL_TASKS });
// store.dispatch({
//   type: REMOVE_TASK,
//   payload: 2,
// });
// store.dispatch({ type: CALCULATE_TOTAL_TASKS });
// store.dispatch({
//   type: REMOVE_TASK,
//   payload: 1,
// });
// store.dispatch({ type: CALCULATE_TOTAL_TASKS });

// store.dispatch({
//   type: TOGGLE_TASK,
//   payload: 1,
// });
