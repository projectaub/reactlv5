import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();

  return (
    <>
      <header>TODOLIST</header>
      <main>
        <button
          onClick={() => {
            navigator("/todo/add");
          }}
        >
          할일 기록하기
        </button>
        <button
          onClick={() => {
            navigator("/todo/todolist");
          }}
        >
          할일 목록
        </button>
      </main>
    </>
  );
};

export default Home;
