import React, { useState } from "react";
import { useTodos } from "../../contexts/todos-context";

const INITIAL_STATE = { task: "", completed: false };
export const NewTodo = () => {
  const { createTodo } = useTodos();
  const [newTodo, setNewTodo] = useState(INITIAL_STATE);

  const onInputChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const onButtonClick = () => {
    createTodo({ ...newTodo, id: new Date().getTime() });
    setNewTodo(INITIAL_STATE);
  };
  return (
    <section>
      <input
        value={newTodo.task}
        name="task"
        onChange={onInputChange}
        type="text"
      />

      <button onClick={onButtonClick}>Add Todo</button>
    </section>
  );
};
