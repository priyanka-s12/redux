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

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const addTaskBtn = document.querySelector('#addTaskBtn');
const taskId = document.querySelector('#taskId');
const removeTaskBtn = document.querySelector('#removeTaskBtn');
const taskList = document.querySelector('#taskList');
const totalTasks = document.querySelector('#totalTasks');

store.subscribe(() => {
  console.log(store.getState());
  renderTasks();
  updateTotalTasks();
});

const addTaskHandler = () => {
  // const state = store.getState();
  const { tasks } = store.getState();

  const taskName = document.querySelector('#taskName').value;
  const taskDescription = document.querySelector('#taskDescription').value;

  if (taskName && taskDescription) {
    const taskObject = {
      id: tasks.length + 1,
      name: taskName,
      description: taskDescription,
      isCompleted: false,
    };
    store.dispatch(addTask(taskObject));
  }
  store.dispatch(calculateTotalTasks());
  renderTasks();
};

const removeTaskHandler = () => {
  const id = taskId.value;
  const { tasks } = store.getState();
  const findTask = tasks.map((task) => task.id == id);
  if (findTask) {
    store.dispatch(removeTask(id));
    store.dispatch(calculateTotalTasks());
  }
  renderTasks();
  taskId.value = '';
};

window.handleCheckboxTask = (taskId) => {
  store.dispatch(toggleTask(taskId));
};

addTaskBtn.addEventListener('click', addTaskHandler);
removeTaskBtn.addEventListener('click', removeTaskHandler);

const renderTasks = () => {
  // const state = store.getState();
  const { tasks } = store.getState();
  taskList.innerHTML = tasks
    .map(
      (task) =>
        `<li><input type="checkbox" name=${task.id} ${
          task.isCompleted ? 'checked' : ''
        } onChange="handleCheckboxTask(${task.id})"/><label>${task.id}. ${
          task.name
        }: ${task.description} ${
          task.isCompleted ? ': Completed' : ''
        }</label></li>`
    )
    .join('');
};

const updateTotalTasks = () => {
  const { taskCount } = store.getState();
  if (taskCount > 0) {
    totalTasks.textContent = `Total Tasks: ${taskCount}`;
  } else {
    totalTasks.textContent = '';
  }
};
renderTasks();
updateTotalTasks();

// store.dispatch({
//   type: ADD_TASK,
//   payload: {
//     id: 1,
//     name: 'Buy stationary',
//     description: 'Buy stationary for class',
//   },
// });

// store.dispatch({
//   type: ADD_TASK,
//   payload: {
//     id: 2,
//     name: 'Buy book',
//     description: 'Buy history book',
//   },
// });
