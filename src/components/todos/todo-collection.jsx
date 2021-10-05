import React from "react";
import { useTodos } from "../../contexts/todos-context";
import { TodoItem } from "./todo-item";

export const TodosCollection = () => {
  const { todos } = useTodos();
  return (
    <ol>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ol>
  );
};
