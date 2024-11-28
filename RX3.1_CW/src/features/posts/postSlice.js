import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [
      {
        postId: 'P001',
        caption: 'Learning Redux Toolkit',
        likes: 20,
        users: {
          userId: 'u123',
          name: 'John Doe',
        },
      },
      {
        postId: 'P002',
        caption: 'It is fun to learn redux',
        likes: 18,
        users: {
          userId: 'u123',
          name: 'John Doe',
        },
      },
    ],
  },
  reducers: {},
});

//currently whole slice is reducer
export default postSlice.reducer;
