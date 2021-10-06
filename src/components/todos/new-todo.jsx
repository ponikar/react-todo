import React, { useRef, useState } from "react";
import { useTodos } from "../../contexts/todos-context";
import { SelectPriorityInput } from "../common/select-priority-input";

const INITIAL_STATE = { task: "", completed: false, priority: "normal" };
export const NewTodo = () => {
  const { createTodo } = useTodos();
  const [newTodo, setNewTodo] = useState(INITIAL_STATE);
  const inputRef = useRef(null);

  const onInputChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const onButtonClick = () => {
    if (!newTodo.task) return inputRef.current.focus();
    createTodo({ ...newTodo, id: new Date().getTime() });
    setNewTodo(INITIAL_STATE);
  };
  return (
    <section className="new-todo-container">
      <input
        ref={inputRef}
        value={newTodo.task}
        name="task"
        placeholder="Add Your Task here"
        onChange={onInputChange}
        type="text"
      />
      <SelectPriorityInput
        value={newTodo.priority}
        onChange={onInputChange}
        name="priority"
      />
      <button style={{ marginLeft: "5px" }} onClick={onButtonClick}>
        Add Todo
      </button>
    </section>
  );
};
