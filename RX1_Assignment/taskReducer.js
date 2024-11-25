const initialState = { tasks: [], taskCount: 0 };
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  CALCULATE_TOTAL_TASKS,
} from './actions';

const taskReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload }],
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payload),
      };

    case TOGGLE_TASK:
      // toggle the completed status of the task based on its ID. already passed false when clicked means true that's why reverse case ! added
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id == action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      };

    case CALCULATE_TOTAL_TASKS:
      return { ...state, taskCount: state.tasks.length };

    default:
      return state;
  }
};

export default taskReducer;
