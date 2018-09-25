import { PER_PAGE } from "../actions/index";

export default function (state = 2, action) {
  switch (action.type) {
    case PER_PAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
