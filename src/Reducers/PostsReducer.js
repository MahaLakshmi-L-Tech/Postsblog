import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postById: {},
  pictureById: [],
};

const PostsReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    SetPosts: (state, action) => {
      state.posts = action.payload;
    },
    SetPostId: (state, action) => {
      state.postById = action.payload;
    },
  },
});

export const { SetPosts, SetPostId } = PostsReducer.actions;

export default PostsReducer.reducer;
