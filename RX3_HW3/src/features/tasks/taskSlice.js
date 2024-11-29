import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = 'https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks';

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get(apiUrl);
  console.log(response);
  return response.data;
});

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleButtonPressed: (state, action) => {
      const { date, id } = action.payload;

      const dateFind = state.tasks.find((task) => task.date == date);
      if (dateFind) {
        const taskIndex = dateFind.tasks.findIndex(
          (data) => data.taskId === id
        );

        if (taskIndex !== -1) {
          dateFind.tasks[taskIndex].taskStatus =
            dateFind.tasks[taskIndex].taskStatus === 'Completed'
              ? 'Pending'
              : 'Completed';
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = 'success';
      state.tasks = action.payload.tasks;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload.message;
    });
  },
});

export const { toggleButtonPressed } = taskSlice.actions;
export default taskSlice.reducer;
