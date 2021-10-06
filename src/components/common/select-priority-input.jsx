import React from "react";
export const SelectPriorityInput = ({ value, onChange, name }) => {
  return (
    <select {...{ value, onChange, name }} style={{ margin: "0px 4px" }}>
      <option value="normal">Select Priority Label</option>
      <option value="urgent">Urgent</option>
      <option value="neutral">Neutral</option>
      <option value="non-urgent">Non Urgent</option>
    </select>
  );
};
