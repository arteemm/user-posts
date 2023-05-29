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
  SET_CURRENT_POSTS,
  SET_USER,
  SET_USER_ERROR,
  SET_USER_REQUEST,
  FETCH_USER,
} from '../constants';
import {
  ReceivedPost,
  FetchPostsRequest,
  FetchPostsFailure,
  FetchPostsSuccess,
  ReceivedComment,
  FetchCommentsRequest,
  FetchCommentsSuccess,
  FetchCommentsFailure,
  SetCurrentPostIdType,
  SortCurrentPostsType,
  ReceivedUser,
  FetchUserFailure,
  FetchUserRequest,
  FetchUserSuccess,
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

export const setPostsFailure = (payload: string): FetchPostsFailure => ({
  type: SET_POSTS_ERROR,
  payload,
});

export const setCurrentPostId = (payload: number): SetCurrentPostIdType => ({
  type: SET_CURRENT_POST_ID,
  payload,
});

export const setCurrentPosts = (payload: ReceivedPost[]): SortCurrentPostsType => ({
  type: SET_CURRENT_POSTS,
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

export const setCommentsFailure = (payload: string): FetchCommentsFailure => ({
  type: SET_COMMENTS_ERROR,
  payload,
});

export const fetchUser = (userId: number) => ({
  type: FETCH_USER,
  userId,
});

export const setUser = (payload: ReceivedUser): FetchUserSuccess => ({
  type: SET_USER,
  payload,
});

export const setUserRequest = (): FetchUserRequest => ({
  type: SET_USER_REQUEST,
});

export const setUserFailure = (payload: string): FetchUserFailure => ({
  type: SET_USER_ERROR,
  payload,
});
