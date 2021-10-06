export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : false;
};
