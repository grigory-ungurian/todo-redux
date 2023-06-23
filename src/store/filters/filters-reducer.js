import { SET_FILTER } from "./filters-const";

export const filters = (state = "all", { type, filter }) => {
  switch (type) {
    case SET_FILTER: {
      return filter;
    }
    default: {
      return state;
    }
  }
};
