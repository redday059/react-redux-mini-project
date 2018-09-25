import {combineReducers} from "redux";
import PostsReducer from "./reducer_posts";
import previousTagsReducer from "./reducer_previous_tags";
import PostsPerPage from "./reducer_posts_per_page"
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
  posts: PostsReducer,
  postsPerPage: PostsPerPage,
  form: formReducer,
  previousTags: previousTagsReducer
});

export default rootReducer;