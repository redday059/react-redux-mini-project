import _ from 'lodash';
import { ADD_TAG } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TAG: {
      _.uniq(state.concat(action.payload));
      break;
    }
    default: {
      return state;
    }
  }
}