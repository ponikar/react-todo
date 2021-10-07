import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "../../utils/local-storage";

const todoSlice = createSlice({
  name: "todos",
  initialState: (() => {
    const todos = getTodos();
    if (todos) return todos;
    return [];
  })(),
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      // deleting element with help of index
      state.splice(action.payload.index, 1);
    },
    updateTodo(state, action) {
      state[action.payload.index] = action.payload.todo;
    },
  },
});

export const todoReducers = todoSlice.reducer;

export const {
  actions: { addTodo, removeTodo, updateTodo },
} = todoSlice;
