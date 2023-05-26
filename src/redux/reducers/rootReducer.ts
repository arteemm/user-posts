import { combineReducers } from 'redux';
import setPosts from './posts';
import setComments from './comments';

const rootReducer = combineReducers({
  posts: setPosts,
  comments: setComments,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
