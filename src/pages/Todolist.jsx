import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deleteTodos, __getTodos } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const Todolist = () => {
  const dispatch = useDispatch();
  const navigater = useNavigate();

  const { isLoading, error, todos } = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button
              onClick={() => {
                navigater(`/todo/detail/${todo.id}`);
              }}
            >
              {todo.title}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todolist;
