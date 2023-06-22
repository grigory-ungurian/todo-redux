import { createStore } from "redux";

// reducer
const todos = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: Date.now(),
          title: payload.title,
          completed: false
        }
      ];
    }
    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== payload.id);
    }
    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      );
    }
    default:
      return state;
  }
};

export const store = createStore(
  todos,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// action creators
export const addTodo = (title) => ({
  type: "ADD_TODO",
  payload: { title }
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: { id }
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: { id }
});
