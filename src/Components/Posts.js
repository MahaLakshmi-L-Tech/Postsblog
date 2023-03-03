import React, { useEffect } from "react";
import { GetPosts } from "../Actions/PostsAction";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPost } from "../Selectors/PostsSelector";
import { GetUsersId } from "../Actions/UsersAction";
import { selectUserByID } from "../Selectors/user_selector";
import Comments from "./Comments";
import "./css/posts.scss";

const Posts = () => {
  const postsState = useSelector(selectPost);
  const userState = useSelector(selectUserByID);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = +window.location.pathname.split("/")[2];
    dispatch(GetPosts(id));
    dispatch(GetUsersId(id));
  }, []);

  console.log(postsState);

  return (
    <>
      <div className="postsContainer">
        <div className="userName">
          <b>{userState.name}</b>
        </div>
        <div className="Posts">
          {postsState?.map((post, id) => {
            return (
              // <div className="singlePost">

              <Link to={`/posts/${post.id}/comments`}>
                <div key={id} className="singlePosts">
                  <b>{post.title}</b>
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.body}
                  <br />
                  <br />
                  <div className="comments">View Comments</div>
                  {/* <Comments posts={postsState} /> */}
                </div>
              </Link>

              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Posts;
