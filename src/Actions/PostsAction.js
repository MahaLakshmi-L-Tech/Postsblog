import axios from "axios";
import { SetPosts, SetPostId, SetPictureById } from "../Reducers/PostsReducer";

export const GetPosts = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => {
        const posts = response.data;
        // console.log(posts);
        dispatch(SetPosts(posts));
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

export const GetPostId = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const posts = response.data;
        // console.log(posts);
        dispatch(SetPostId(posts));
      })

      .catch((err) => {
        console.log(err);
      });
  };
};
