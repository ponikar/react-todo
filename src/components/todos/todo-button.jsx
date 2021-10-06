import React from "react";

export const TodoButton = ({ children, ...props }) => {
  return (
    <button {...props} className="todo-edit-button">
      {children}
    </button>
  );
};
