import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todos-const";

// reducer
export const todos = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: Date.now(),
          title: payload.title,
          completed: false,
        },
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== payload.id);
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    }
    default:
      return state;
  }
};
