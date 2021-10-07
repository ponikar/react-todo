import { configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "./todo/todo.reducer";

export const store = configureStore({
  reducer: {
    todos: todoReducers,
  },
  devTools: process.env.NODE_ENV !== "production",
});
