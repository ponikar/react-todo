import React from "react";
import { useTodos } from "../../contexts/todos-context";

export const TodoItem = ({ todo }) => {
  const { id, task, completed } = todo;
  const { updateTodo, deleteTodo } = useTodos();
  return (
    <>
      <li style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </li>
      <input
        checked={completed}
        onChange={(e) => updateTodo(id, { ...todo, completed: !completed })}
        type="checkbox"
      />
      <button onClick={(_) => deleteTodo(id)}>Delete</button>
    </>
  );
};
