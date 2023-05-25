import { combineReducers } from '@reduxjs/toolkit';
import setPosts from './posts';

export const rootReducer = combineReducers({
  posts: setPosts,
});
