import { SET_POSTS } from '../constants';
import { ReceivedPost } from '../../types';

type Posts = {
  posts: ReceivedPost[];
};

interface PostsReducer {
  (state: Posts, {}: { type: string; payload: ReceivedPost[] }): Posts;
}

const initialState: Posts = {
  posts: [],
};

const setPosts: PostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };
    default:
      return state;
  }
};

export default setPosts;
