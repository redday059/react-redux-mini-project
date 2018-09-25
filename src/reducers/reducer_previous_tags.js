import _ from 'lodash';
import { FETCH_POSTS_DATA, ADD_TAG } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_DATA: {
      return action.payload.data ? _.uniq(action.payload.data.map(post => post.categories)) : [];
    }
    case ADD_TAG: {
      return _.uniq(state.concat(action.payload));
    }
    default:
      return state;
  }
}