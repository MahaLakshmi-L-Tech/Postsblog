import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import "./App.scss";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";
import AddComments from "./Components/AddComments";
import EditComments from "./Components/EditComments";
import DeleteComments from "./Components/DeleteComments";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact={true} />
        <Route path="/users/:id/posts" element={<Posts />} exact={true} />
        <Route path="/posts/:id/comments" element={<Comments />} exact={true} />
        <Route
          path="/comments/:id/addComments"
          element={<AddComments />}
          exact={true}
        />
        <Route
          path="/comments/:id/editComments/:id"
          element={<EditComments />}
          exact={true}
        />
        {/* <Route
          path="/comments/:id/deleteComments"
          element={<DeleteComments />}
          exact={true}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
