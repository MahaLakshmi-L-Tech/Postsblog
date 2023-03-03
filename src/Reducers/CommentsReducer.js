import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  updatedComment: [],
  editedComment: [],
};

const CommentsReducer = createSlice({
  name: "comments",
  initialState,
  reducers: {
    SetComments: (state, action) => {
      state.comments = action.payload;
    },
    setEditComments: (state, action) => {
      state.editedComment = action.payload;
    },
    AddComments: (state, action) => {
      console.log(action);
      state.comments.push(action.payload);
    },
    Editcomment: (state, action) => {
      console.log(state.editedComment.body, action.payload.body);
      state.editedComment.body = action.payload.body;
      console.log(state.editedComment);
      state.comments.forEach((comment, index) => {
        if (comment.id === action.payload.id) {
          state.comments[index] = state.editedComment;
        }
      });

      // state.editedComment = state.comments.filter(
      //   (edit) => edit.id === action.payload.id
      // );
      // console.log(...state.editedComment);
      // state.comments.push(action.payload.body);
    },
    DeleteComments: (state, action) => {
      console.log(action.payload);
      state.updatedComment = state.comments.filter(
        (comment) => comment.id !== action.payload.id
      );
    },
  },
});

export const {
  SetComments,
  AddComments,
  Editcomment,
  DeleteComments,
  setEditComments,
} = CommentsReducer.actions;

export default CommentsReducer.reducer;

console.log(Editcomment());
