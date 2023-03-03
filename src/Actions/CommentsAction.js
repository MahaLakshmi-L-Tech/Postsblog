import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SetComments,
  AddComments,
  Editcomment,
  DeleteComments,
  setEditComments,
} from "../Reducers/CommentsReducer";

export const GetComments = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        const comments = response.data;
        console.log(response.data);
        dispatch(SetComments(comments));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const AddCommentsId = (newComment) => {
  return (dispatch) => {
    axios
      .post(`https://jsonplaceholder.typicode.com/comments`, newComment)
      .then((response) => {
        const comments = response.data;
        console.log(response.data);
        const comment = dispatch(AddComments(comments));
        const hasValue = comment.hasOwnProperty("type");
        console.log(comment, hasValue);
        if (hasValue) {
          return true;
          // const navigate = useNavigate();
          // navigate(-1);
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };
};

export const GeteditComments = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => {
        const comments = response.data;
        console.log(response.data);
        dispatch(setEditComments(comments));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const EditComment = (editcomment, id) => {
  return (dispatch) => {
    console.log(editcomment);
    axios
      .put(`https://jsonplaceholder.typicode.com/comments/${id}`, editcomment)
      .then((response) => {
        const comments = response.data;
        console.log(comments);
        const comm = dispatch(Editcomment(comments));
        if (comm) {
          <h1>{comm}</h1>;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const GetdeleteComments = (deleteComments, id) => {
  return (dispatch) => {
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/comments/${id}`,
        deleteComments
      )
      .then((response) => {
        const deleteComm = response.data;
        console.log(deleteComm);
        console.log(response.data);
        dispatch(DeleteComments(deleteComm));
        if (deleteComm) {
          console.log("correct");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
