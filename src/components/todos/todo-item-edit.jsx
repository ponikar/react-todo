import React from "react";
import { useTodos } from "../../contexts/todos-context";
import { TodoButton } from "./todo-button";

export const TodoItemEdit = ({
  isEditable,
  setIsEditable,
  editTask,
  resetTodo,
}) => {
  const onEdit = (_) => {
    if (!isEditable) return setIsEditable(true);
    updateTodo(editTask.id, { ...editTask });
    setIsEditable(false);
  };
  const { updateTodo, deleteTodo } = useTodos();
  return (
    <div className="todo-edit">
      <input
        checked={editTask.completed}
        onChange={(e) =>
          updateTodo(editTask.id, {
            ...editTask,
            completed: !editTask.completed,
          })
        }
        type="checkbox"
      />
      <TodoButton onClick={onEdit}>{isEditable ? "Save" : "Edit"}</TodoButton>
      {isEditable && <TodoButton onClick={resetTodo}>Cancel</TodoButton>}
      <TodoButton onClick={(_) => deleteTodo(editTask.id)}>Delete</TodoButton>
    </div>
  );
};
