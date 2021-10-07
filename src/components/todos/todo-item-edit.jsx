import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../store/todo/todo.reducer";
import { TodoButton } from "./todo-button";

export const TodoItemEdit = ({
  isEditable,
  setIsEditable,
  editTask,
  resetTodo,
  index,
}) => {
  const payload = { index };
  const dispatch = useDispatch();
  const onEdit = (_) => {
    if (!isEditable) return setIsEditable(true);
    updateTodo(payload, { ...editTask });
    setIsEditable(false);
  };
  return (
    <div className="todo-edit">
      <input
        checked={editTask.completed}
        onChange={(e) =>
          dispatch(
            updateTodo({
              ...payload,
              todo: { ...editTask, completed: !editTask.completed },
            })
          )
        }
        type="checkbox"
      />
      <TodoButton onClick={onEdit}>{isEditable ? "Save" : "Edit"}</TodoButton>
      {isEditable && <TodoButton onClick={resetTodo}>Cancel</TodoButton>}
      <TodoButton onClick={(_) => dispatch(removeTodo(payload))}>
        Delete
      </TodoButton>
    </div>
  );
};
