import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  userById: {},
};

const UserReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    SetUsers: (state, action) => {
      state.users = action.payload;
    },
    SetUserInfoByID: (state, action) => {
      state.userById = action.payload;
    },
  },
});

export const { SetUsers, SetUserInfoByID } = UserReducer.actions;

export default UserReducer.reducer;
