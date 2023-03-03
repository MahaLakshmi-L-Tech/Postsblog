import axios from "axios";
import { SetUsers, SetUserInfoByID } from "../Reducers/UserReducer";

export const GetUsers = () => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        const users = response.data;
        dispatch(SetUsers(users));
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

export const GetUsersId = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const users = response.data;
        dispatch(SetUserInfoByID(users));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
