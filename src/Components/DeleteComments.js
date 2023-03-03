import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectComments } from "../Selectors/CommentsSelector";
import { GeteditComments, GetdeleteComments } from "../Actions/CommentsAction";
import { useNavigate } from "react-router-dom";

const DeleteComments = () => {
  const commentsState = useSelector(selectComments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const id = +window.location.pathname.split("/")[2];
    console.log(id);
    dispatch(GeteditComments(id));
  }, []);

  const response = dispatch(GetdeleteComments(commentsState, commentsState.id));

  if (response) {
    alert("comment not Editated");
  } else {
    navigate(-1);
  }
};

export default DeleteComments;
