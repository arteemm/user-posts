import { FETCH_POSTS, SET_POSTS } from '../constants';
import { ReceivedPost } from '../../types';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const setPosts = (payload: ReceivedPost[]) => ({
  type: SET_POSTS,
  payload,
});
