import { useSelector } from "react-redux";

const selectTodo = (state) => state.todos;

export const useSelectTodo = () => {
  const todos = useSelector(selectTodo);
  if (!todos) throw Error("Todos not found!");

  return todos;
};
