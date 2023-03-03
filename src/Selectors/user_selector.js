// import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.usersState.users;

export const selectUserByID = (state) => state.usersState.userById;
