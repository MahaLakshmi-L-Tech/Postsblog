import React, { useEffect } from "react";
import { GetUsers } from "../Actions/UsersAction";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../Selectors/user_selector";
import { BsPersonSquare } from "react-icons/bs";
import "./css/user.scss";

const Users = () => {
  const usersState = useSelector(selectUser);
  const dispatch = useDispatch();
  // const [users, setUsers] = useState(usersState);

  useEffect(() => {
    dispatch(GetUsers());
  }, []);

  // useEffect(() => {
  //   if (users.length !== usersState.length) {
  //     setUsers(usersState);
  //   }
  // }, [usersState]);
  // console.log(users, usersState);
  // return <h1> Hello</h1>;

  return (
    <>
      <div className="usersDetail">
        <div className="userNames">
          {usersState?.map((usr) => {
            return (
              <>
                <div className="iconUser">
                  <div className="iconSize">
                    <Link to={`/users/${usr.id}/posts`}>
                      <BsPersonSquare size={"40px"} />
                    </Link>
                  </div>
                  <div className="link">
                    <Link to={`/users/${usr.id}/posts`}>
                      <h5> {usr.name}</h5>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
