import { FETCH_POSTS, SET_POSTS, SET_POSTS_ERROR, SET_POSTS_REQUEST } from '../constants';
import { ReceivedPost, FetchPostsRequest, FetchTodoFailure, FetchPostsSuccess } from '../../types';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const setPosts = (payload: ReceivedPost[]): FetchPostsSuccess => ({
  type: SET_POSTS,
  payload,
});

export const setPostsRequest = (): FetchPostsRequest => ({
  type: SET_POSTS_REQUEST,
});

export const setPostsFailure = (payload: string): FetchTodoFailure => ({
  type: SET_POSTS_ERROR,
  payload,
});
