import { combineReducers } from 'redux';
import setPosts from './posts';

const rootReducer = combineReducers({
  posts: setPosts,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
