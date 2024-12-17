//constanyt actions
export const ADD_TASK = 'task/added';
export const REMOVE_TASK = 'task/removed';
export const TOGGLE_TASK = 'task/toggled';
export const CALCULATE_TOTAL_TASKS = 'task/calculateTotalTasks';

//action creater functions
//taskes task as parameter and returns action object with type ADD_TASK and payload as task
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const calculateTotalTasks = () => ({
  type: CALCULATE_TOTAL_TASKS,
});
