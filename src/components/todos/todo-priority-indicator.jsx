import React from "react";

export const TodoPriorityIndicator = ({ priority }) => {
  return (
    <div
      title={priority}
      style={{
        width: "10px",
        height: "10px",
        backgroundColor:
          priority === "neutral"
            ? "lightgreen"
            : priority === "urgent"
            ? "red"
            : "blue",
      }}
    />
  );
};
