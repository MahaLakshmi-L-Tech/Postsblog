import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GetComments,
  AddCommentsId,
  GetdeleteComments,
} from "../Actions/CommentsAction";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectComments,
  selectUpdatedComments,
} from "../Selectors/CommentsSelector";
import { GetPostId } from "../Actions/PostsAction";
import { selectPostId } from "../Selectors/PostsSelector";
import "./css/comments.scss";

const Comments = () => {
  const commentsState = useSelector(selectComments);
  const postsState = useSelector(selectPostId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const id = +window.location.pathname.split("/")[2];
    console.log(id);
    dispatch(GetComments(id));
  }, []);

  // useEffect(() => {
  //   if (commentsState.length) {
  //     const id = commentsState[0]?.postId;
  //     dispatch(GetPostId(id));
  //   }
  // }, [commentsState]);

  const handleDelete = (e) => {
    console.log(e, e.target.value);
    const id = e.target.value;
    const response = dispatch(GetdeleteComments(commentsState, id));
    console.log(response);
  };

  console.log(commentsState);
  return (
    <>
      <div className="commentsContainer">
        <br />
        <Link
          to={`/comments/${commentsState[0]?.postId}/addComments`}
          className="addcomment"
        >
          Add Comments
        </Link>
        {commentsState?.map((comment) => {
          return (
            <>
              <div className="comments">
                <div>
                  <b>{comment.name}</b>
                </div>
                <div>{comment.email}</div>

                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{comment.body}
                </div>

                <br />
                <div className="editbutton">
                  <Link
                    to={`/comments/${comment.postId}/editComments/${comment.id}`}
                    className="editcomment"
                  >
                    Edit Comments
                  </Link>
                  <br />
                  <button
                    value={comment.id}
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  >
                    Delete Comments
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
