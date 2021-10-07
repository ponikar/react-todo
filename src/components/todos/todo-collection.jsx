import React from "react";
import { useTodos } from "../../contexts/todos-context";
import { TodoItem } from "./todo-item";
import "./todo.style.css";

export const TodosCollection = () => {
  const { todos } = useTodos();
  return !todos.length ? (
    <section className="no-todo-container">
      <img alt="No todos left to do!" src="/svgs/no-todos.svg" />
      <h2>Wooho! No Todos</h2>
    </section>
  ) : (
    <ol style={{ width: "100%" }}>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ol>
  );
};
