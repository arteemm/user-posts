import { combineReducers } from 'redux';
import setPosts from './posts';
import setComments from './comments';
import setUser from './user';

const rootReducer = combineReducers({
  posts: setPosts,
  comments: setComments,
  user: setUser,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
