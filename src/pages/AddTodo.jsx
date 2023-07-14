import React, { useState } from "react";
import { __getTodos, __postTodos } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInpue";

const AddTodo = () => {
  const [title, setTitleHandler] = useInput("");
  const [contents, setContentsHandler] = useInput("");

  const dispatch = useDispatch();
  // const [title, setTitle] = useState({
  //   title: "",
  // });
  // const [contents, setContents] = useState({
  //   contents: "",
  // });

  // const setTitleHandler = (e) => {
  //   setTitle({ title: e.target.value });
  // };

  // const setContentsHandler = (e) => {
  //   setContents({ title: e.target.value });
  // };

  return (
    <>
      <input type="text" value={title} onChange={setTitleHandler} />
      <input type="text" value={contents} onChange={setContentsHandler} />
      <button
        onClick={(e) => {
          dispatch(__postTodos({ title, contents }));
          dispatch(__getTodos());
        }}
      >
        추가
      </button>
    </>
  );
};

export default AddTodo;
