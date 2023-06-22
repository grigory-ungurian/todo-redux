import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos-const";

// action creators
export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: { title },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});
