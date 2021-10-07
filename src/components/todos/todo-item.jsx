import React, { useEffect, useState } from "react";
import { SelectPriorityInput } from "../common/select-priority-input";
import { TodoItemEdit } from "./todo-item-edit";
import { TodoPriorityIndicator } from "./todo-priority-indicator";

export const TodoItem = ({ todo, index }) => {
  const { completed } = todo;
  const [isEditable, setIsEditable] = useState(false);
  const [editTask, setEditTask] = useState(todo);

  useEffect(() => {
    setEditTask(todo);
  }, [todo]);

  const onChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };
  const resetTodo = () => {
    setEditTask(todo);
    setIsEditable(false);
  };
  return (
    <li className="todo-container">
      <div className="todo-preview">
        <TodoPriorityIndicator priority={editTask.priority} />
        <input
          type="text"
          onChange={onChange}
          value={editTask.task}
          readOnly={!isEditable}
          style={{
            borderWidth: isEditable ? "1px" : "0px",
            textDecoration: !isEditable && completed ? "line-through" : "none",
          }}
          name="task"
          className="todo-edit-input"
        />
        {isEditable && (
          <SelectPriorityInput
            name="priority"
            value={editTask.priority}
            onChange={onChange}
          />
        )}
      </div>
      <TodoItemEdit
        {...{ resetTodo, isEditable, setIsEditable, editTask, index }}
      />
    </li>
  );
};
