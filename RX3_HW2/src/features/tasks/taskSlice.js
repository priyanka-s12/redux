import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      date: '28/11/2024',
      tasks: [
        {
          taskId: 'T101',
          name: 'Get groceries from the market.',
          isCompleted: false,
          status: 'Pending',
        },
        {
          taskId: 'T102',
          name: 'Go to gym.',
          isCompleted: true,
          status: 'Completed',
        },
        {
          taskId: 'T103',
          name: 'Water the plants.',
          isCompleted: true,
          status: 'Completed',
        },
      ],
    },
    {
      date: '29/11/2024',
      tasks: [
        {
          taskId: 'T201',
          name: 'Go to the park.',
          isCompleted: true,
          status: 'Completed',
        },
        {
          taskId: 'T202',
          name: 'Get my room cleaned.',
          isCompleted: false,
          status: 'Pending',
        },
      ],
    },
  ],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleButtonPressed: (state, action) => {
      const { date, id } = action.payload;

      const dateFind = state.tasks.find((task) => task.date == date);
      // console.log(dateFind);
      //will get object 28th date and its task

      // if (dateFind) {
      //   const task = dateFind.tasks.find((data) => data.taskId === id);

      //   if (task) {
      //     task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
      //   }
      // }

      if (dateFind) {
        const taskIndex = dateFind.tasks.findIndex(
          (data) => data.taskId === id
        );
        console.log(taskIndex);

        if (taskIndex !== -1) {
          dateFind.tasks[taskIndex].isCompleted =
            !dateFind.tasks[taskIndex].isCompleted;
        }
      }
    },
  },
});

export const { toggleButtonPressed } = taskSlice.actions;
export default taskSlice.reducer;
