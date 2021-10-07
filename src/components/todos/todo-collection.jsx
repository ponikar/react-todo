import React from "react";
import { useSelectTodo } from "../../store/todo/todo.selectors";
import { TodoItem } from "./todo-item";
import "./todo.style.css";

export const TodosCollection = () => {
  const todos = useSelectTodo();
  return (
    <ol style={{ width: "100%" }}>
      {todos.map((t, index) => (
        <TodoItem key={t.id} index={index} todo={t} />
      ))}
    </ol>
  );
};
