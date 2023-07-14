import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "../pages/AddTodo";
import Todolist from "../pages/Todolist";
import Home from "../pages/Home";
import TodoDetail from "../pages/TodoDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/add" element={<AddTodo />} />
        <Route path="/todo/todolist" element={<Todolist />} />
        <Route path="/todo/detail/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
