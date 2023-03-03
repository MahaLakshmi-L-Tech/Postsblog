import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCommentsId } from "../Actions/CommentsAction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPost } from "../Selectors/PostsSelector";
import { Comments } from "../Components/Comments";
import "./css/addcomments.scss";

const AddComments = () => {
  const location = +window.location.pathname.split("/")[2];
  const postsState = useSelector(selectPost);
  const [username, setName] = useState("");
  const [useremail, setEmail] = useState("");
  const [usercomment, setComment] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const HandleNewComment = (postId, name, email, comment) => {
    const newComment = {
      postId: location,
      name: username,
      email: useremail,
      body: usercomment,
    };

    const response = dispatch(AddCommentsId(newComment));
    console.log(response);

    if (response) {
      // const navigate = useNavigate();
      // return navigate(-1);
      //goback to comments view & display all comments for that post along with newly added
    } else {
      navigate(-1);
      //show alert in same page .
      // const navigate = useNavigate();
      // return navigate("/Comments");
    }
  };

  return (
    <div className="addCommentsContainer">
      <>
        <div className="addComments">
          postId:{location}
          <br /> <br />
          <label>
            Name:
            <input type="text" id="name" onChange={handleChangeName} />
          </label>
          <br /> <br />
          <label>
            Email:
            <input type="text" id="email" onChange={handleChangeEmail} />
          </label>
          <br />
          <br />
          <label>
            Body
            <input type="text" id="comment" onChange={handleChangeComment} />
          </label>
          <br />
          <br />
          <button
            type="submit"
            value="Submit"
            onClick={() => HandleNewComment()}
          >
            Submit
          </button>
        </div>
      </>
    </div>
  );
};

export default AddComments;
