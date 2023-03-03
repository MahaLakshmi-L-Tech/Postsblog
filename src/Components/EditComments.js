import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EditComment,
  GeteditComments,
  GetComments,
} from "../Actions/CommentsAction";
import {
  selectEditedComments,
  selectComments,
} from "../Selectors/CommentsSelector";
import "./css/editcomments.scss";

const EditComments = () => {
  const commentsState = useSelector(selectEditedComments);
  const commentsInfo = useSelector(selectComments);
  const location = +window.location.pathname.split("/")[2];
  const id = +window.location.pathname.split("/")[4];
  const [usereditcomment, setEditComment] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const id = +window.location.pathname.split("/")[4];
    dispatch(GeteditComments(id));
  }, []);

  console.log(commentsState);
  const handleChangeBody = (event, changeValue) => {
    if (changeValue === "Body") {
      setEditComment(event.target.value);
    }
  };
  useEffect(() => {
    const id = +window.location.pathname.split("/")[2];
    console.log(id);
    dispatch(GetComments(id));
  }, []);

  const HandleEditComment = (postId, name, email, comment) => {
    const newEditComment = {
      postId: id,
      name: commentsState.name,
      email: commentsState.email,
      body: usereditcomment,
    };

    const response = dispatch(EditComment(newEditComment, commentsState.id));
    if (response) {
      alert("comment not Editated");
    } else {
      navigate(-1);
    }
  };
  console.log(commentsInfo);

  const displayComments = (
    <div className="commentBox">
      Post Id: {commentsState.postId}
      <br />
      Email: {commentsState.email}
      <br />
      Post Title: {commentsState.name}
      <br />
      <br />
      <div className="textarea1">
        <div className="text">
          Body:
          <textarea
            //   value={commentsState.body}
            onChange={(e) => {
              handleChangeBody(e, "Body");
            }}
          ></textarea>
        </div>
      </div>
      <br /> <br />
    </div>
  );
  return (
    <>
      <div className="editcomments">
        {displayComments}

        <button
          className="editcommentbutton"
          type="submit"
          value="Submit"
          onClick={() => HandleEditComment()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default EditComments;
