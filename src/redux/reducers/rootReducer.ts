import { combineReducers } from 'redux';
import setPosts from './posts';
import errors from './errors';

const rootReducer = combineReducers({
  posts: setPosts,
  errors,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
