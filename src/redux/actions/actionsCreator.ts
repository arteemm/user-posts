import {
  FETCH_POSTS,
  SET_POSTS,
  SET_POSTS_ERROR,
  SET_POSTS_REQUEST,
  SET_CURRENT_POST_ID,
  SET_COMMENTS,
  SET_COMMENTS_ERROR,
  SET_COMMENTS_REQUEST,
  FETCH_COMMENTS,
} from '../constants';
import {
  ReceivedPost,
  FetchPostsRequest,
  FetchTPostsFailure,
  FetchPostsSuccess,
  ReceivedComment,
  FetchCommentsRequest,
  FetchCommentsSuccess,
  FetchTCommentsFailure,
  SetCurrentPostIdType,
} from '../../types';

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

export const setPostsFailure = (payload: string): FetchTPostsFailure => ({
  type: SET_POSTS_ERROR,
  payload,
});

export const setCurrentPostId = (payload: number): SetCurrentPostIdType => ({
  type: SET_CURRENT_POST_ID,
  payload,
});

export const fetchComments = (idPost: number) => ({
  type: FETCH_COMMENTS,
  idPost,
});

export const setComments = (payload: ReceivedComment[]): FetchCommentsSuccess => ({
  type: SET_COMMENTS,
  payload,
});

export const setCommentsRequest = (): FetchCommentsRequest => ({
  type: SET_COMMENTS_REQUEST,
});

export const setCommentsFailure = (payload: string): FetchTCommentsFailure => ({
  type: SET_COMMENTS_ERROR,
  payload,
});
