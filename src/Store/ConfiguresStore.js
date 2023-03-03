import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Reducers/UserReducer";
import PostsReducer from "../Reducers/PostsReducer";
import CommentsReducer from "../Reducers/CommentsReducer";

export const store = configureStore({
  reducer: {
    usersState: UserReducer,
    postsState: PostsReducer,
    commentState: CommentsReducer,
  },
});
