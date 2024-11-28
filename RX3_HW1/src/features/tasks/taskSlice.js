import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   tasks: [
//     {
//       date: '28/11/2024',
//       tasks: [
//         {
//           name: 'Get groceries from the market.',
//           status: 'Pending',
//         },
//         {
//           name: 'Go to gym.',
//           status: 'Completed',
//         },
//         {
//           name: 'Water the plants.',
//           status: 'Completed',
//         },
//       ],
//     },
//     {
//       date: '29/11/2024',
//       tasks: [
//         {
//           name: 'Go to the park.',
//           status: 'Completed',
//         },
//         {
//           name: 'Get my room cleaned.',
//           status: 'Pending',
//         },
//       ],
//     },
//   ],
// };

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        date: '28/11/2024',
        tasks: [
          {
            name: 'Get groceries from the market.',
            status: 'Pending',
          },
          {
            name: 'Go to gym.',
            status: 'Completed',
          },
          {
            name: 'Water the plants.',
            status: 'Completed',
          },
        ],
      },
      {
        date: '29/11/2024',
        tasks: [
          {
            name: 'Go to the park.',
            status: 'Completed',
          },
          {
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
