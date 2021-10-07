import React, { useEffect, useState } from "react";
import { useTodos } from "../../contexts/todos-context";
import { todoFilters } from "./todo-filter-option.data";
import { TodoItem } from "./todo-item";
import "./todo.style.css";

export const TodosCollection = () => {
  const { todos } = useTodos();
  const [filter, setFilter] = useState("all");

  const [filteredTodos, setFilterTodos] = useState(todos);

  useEffect(() => {
    switch (filter) {
      case "non-urgent":
        return setFilterTodos(() =>
          todos.filter((todo) => todo.priority === "non-urgent")
        );
      case "neutral":
        return setFilterTodos(() =>
          todos.filter((todo) => todo.priority === "neutral")
        );
      case "completed":
        return setFilterTodos(() => todos.filter((t) => t.completed));
      case "urgent":
        return setFilterTodos(() =>
          todos.filter((todo) => todo.priority === "urgent")
        );
      default:
        setFilterTodos(todos);
    }
  }, [filter, todos]);
  useEffect(() => {}, [filter]);
  return !todos.length ? (
    <section className="no-todo-container">
      <img alt="No todos left to do!" src="/svgs/no-todos.svg" />
      <h2>Wooho! No Todos</h2>
    </section>
  ) : (
    <>
      <section className="filter-container">
        {todoFilters.map(({ name, key }) => (
          <div
            key={key}
            className={`${
              key === filter ? "selected-filter" : "filter-not-selected"
            }`}
            onClick={(_) => setFilter(key)}
          >
            {" "}
            {name}{" "}
          </div>
        ))}
      </section>
      <ol style={{ width: "100%" }}>
        {filteredTodos.map((t) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ol>
    </>
  );
};
