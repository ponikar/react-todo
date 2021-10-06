import { createContext, useContext, useEffect, useState } from "react";
import { getTodos } from "../utils/local-storage";

const TodoContext = createContext([]);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "You can edit me",
      completed: true,
      priority: "normal",
    },
  ]);

  useEffect(() => {
    const todos = getTodos();
    if (todos) setTodos(todos);
  }, []);

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
