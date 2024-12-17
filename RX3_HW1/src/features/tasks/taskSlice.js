import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        date: '28/12/2024',
        tasks: [
          {
            taskId: 'T101',
            name: 'Get groceries from the market.',
            status: 'Pending',
          },
          {
            taskId: 'T102',
            name: 'Go to gym.',
            status: 'Completed',
          },
          {
            taskId: 'T103',
            name: 'Water the plants.',
            status: 'Completed',
          },
        ],
      },
      {
        date: '29/12/2024',
        tasks: [
          {
            taskId: 'T201',
            name: 'Go to the park.',
            status: 'Completed',
          },
          {
            taskId: 'T202',
            name: 'Get my room cleaned.',
            status: 'Pending',
          },
        ],
      },
    ],
  },
  reducers: {},
});

export default taskSlice.reducer;
