import { createContext, useContext, useState } from "react";

const TodoContext = createContext([]);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Making a basic Apps",
      completed: true,
    },
  ]);

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const updateTodo = (todoId, updatedTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todoId) return updatedTodo;
        return t;
      })
    );
  };
  return (
    <TodoContext.Provider value={{ todos, updateTodo, createTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) throw Error("Make Sure You have wrapped with Provider");

  return context;
};
