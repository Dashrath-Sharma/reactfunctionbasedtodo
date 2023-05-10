import React, { useState } from "react";
import Title from "./Title";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  function onSave(data) {
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        name: data,
      },
    ]);
  }

  return (
    <div className="todo-main">
      <Title title="My Todo List :)" />
      <AddTodo saveData={onSave} />
      <TodoList todos={todoList} />
    </div>
  );
}
