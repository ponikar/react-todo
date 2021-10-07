import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/todo.reducer";
import { useSelectTodo } from "../../store/todo/todo.selectors";
import { saveTodos } from "../../utils/local-storage";
import { SelectPriorityInput } from "../common/select-priority-input";
import { TodoButton } from "./todo-button";

const INITIAL_STATE = { task: "", completed: false, priority: "normal" };
export const NewTodo = () => {
  const todos = useSelectTodo();

  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState(INITIAL_STATE);
  const inputRef = useRef(null);
  const [isSaved, setIsSaved] = useState(false);

  const onInputChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const onButtonClick = () => {
    if (!newTodo.task) return inputRef.current.focus();
    dispatch(addTodo({ ...newTodo, id: new Date().getTime() }));
    setNewTodo(INITIAL_STATE);
  };

  useEffect(() => {
    // if someone updates todos,
    setIsSaved(false);
  }, [todos]);

  const saveTodosBrowser = () => {
    saveTodos(todos);
    setIsSaved(true);
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
      <TodoButton onClick={onButtonClick}>Add Todo</TodoButton>
      <TodoButton onClick={saveTodosBrowser}>
        {isSaved ? "Todo Saved" : "Save Todos"}
      </TodoButton>
    </section>
  );
};
