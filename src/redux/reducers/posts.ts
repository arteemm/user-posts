import {
  SET_POSTS,
  SET_POSTS_REQUEST,
  SET_POSTS_ERROR,
  SET_CURRENT_POST_ID,
  SET_CURRENT_POSTS,
} from '../constants';
import { ReceivedPost, PostAction, Posts } from '../../types';

const initialState: Posts = {
  pending: false,
  posts: [] as ReceivedPost[],
  error: null,
  currentPostId: 1,
  currentPosts: [] as ReceivedPost[],
};

const setPosts = (state = initialState, action: PostAction): Posts => {
  switch (action.type) {
    case SET_POSTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SET_POSTS:
      return {
        ...state,
        pending: false,
        posts: action.payload,
        currentPosts: action.payload,
      };
    case SET_POSTS_ERROR:
      return {
        ...state,
        pending: false,
        posts: [] as ReceivedPost[],
        currentPosts: [] as ReceivedPost[],
        error: action.payload,
      };
    case SET_CURRENT_POST_ID:
      return {
        ...state,
        currentPostId: action.payload,
      };
    case SET_CURRENT_POSTS:
      return {
        ...state,
        currentPosts: action.payload,
      };
    default:
      return state;
  }
};

export default setPosts;
