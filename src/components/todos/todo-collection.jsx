import React from "react";
import { useTodos } from "../../contexts/todos-context";
import { TodoItem } from "./todo-item";
import "./todo.style.css";

export const TodosCollection = () => {
  const { todos } = useTodos();
  return (
    <ol style={{ width: "100%" }}>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ol>
  );
};
