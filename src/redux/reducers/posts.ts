import { SET_POSTS, SET_POSTS_REQUEST, SET_POSTS_ERROR } from '../constants';
import { ReceivedPost, PostAction, Posts } from '../../types';

const initialState: Posts = {
  pending: false,
  posts: [] as ReceivedPost[],
  error: null,
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
      };
    case SET_POSTS_ERROR:
      return {
        ...state,
        pending: false,
        posts: [] as ReceivedPost[],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default setPosts;
