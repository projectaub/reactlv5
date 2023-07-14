import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __deleteTodos, __getTodoThunk } from "../redux/modules/todos";
import useInput from "../hooks/useInpue";

const TodoDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getTodoThunk(id));
  }, []);

  const [contents, setContentsHandler] = useInput("");

  const [isOpen, setIsopen] = useState(false);

  const openModal = () => {
    setIsopen(true);
  };
  const closeModal = () => {
    setIsopen(false);
  };

  const todos = useSelector((state) => {
    return state.todos.todos;
  });

  const todo = todos.filter((item) => {
    return item.id == id;
  });
  console.log("todo", todo);
  return (
    <>
      <div>
        {todos.map((item) => {
          if (item.id == id) {
            return (
              <div key={item.id}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.contents}</div>
                <button onClick={openModal}>수정</button>
                {isOpen && (
                  <div>
                    <input
                      type="text"
                      value={contents}
                      onChange={setContentsHandler}
                    />
                    <button>수정</button>
                    <button onClick={closeModal}>닫기</button>
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default TodoDetail;

// const dispatch = useDispatch();
// const navigater = useNavigate();

// const { isLoading, error, todos } = useSelector((state) => {
//   return state.todos;
// });

// useEffect(() => {
//   dispatch(__getTodos());
// }, []);

// if (isLoading) {
//   return <div>로딩중...</div>;
// }
// if (error) {
//   return <div>{error.message}</div>;
// }

// return (
//   <>
//     {todos.map((todo) => {
//       return (
//         <div key={todo.id}>
//           <div>{todo.title}</div>
//           <div>{todo.contents}</div>
//           <button
//             onClick={(e) => {
//               dispatch(__deleteTodos(todo.id));
//               dispatch(__getTodos());
//             }}
//           >
//             삭제
//           </button>
//           <button
//             onClick={() => {
//               navigater("/");
//             }}
//           >
//             이전으로
//           </button>
//         </div>
//       );
//     })}
