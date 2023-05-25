import { SET_POSTS } from '../constants';
import { ReceivedPost } from '../../types';

type Posts = {
  posts: ReceivedPost[];
};

interface PostAction {
  type: string;
  payload: ReceivedPost[];
}

const initialState: Posts = {
  posts: [] as ReceivedPost[],
};

const setPosts = (state = initialState, { type, payload }: PostAction) => {
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
