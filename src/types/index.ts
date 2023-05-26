import {
  SET_POSTS_REQUEST,
  SET_POSTS,
  SET_POSTS_ERROR,
  SET_COMMENTS,
  SET_COMMENTS_ERROR,
  SET_COMMENTS_REQUEST,
} from '../redux/constants';

export type ReceivedPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ReceivedComments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Posts = {
  pending: boolean;
  posts: ReceivedPost[];
  error: string | null;
  currentPostId: number;
};

export type Comments = {
  pending: boolean;
  comments: ReceivedComments[];
  error: string | null;
};
export interface FetchPostsRequest {
  type: typeof SET_POSTS_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof SET_POSTS;
  payload: ReceivedPost[];
};

export type FetchTPostsFailure = {
  type: typeof SET_POSTS_ERROR;
  payload: string;
};

export type PostAction = FetchPostsRequest | FetchPostsSuccess | FetchTPostsFailure;

export interface FetchCommentsRequest {
  type: typeof SET_COMMENTS_REQUEST;
}

export type FetchCommentsSuccess = {
  type: typeof SET_COMMENTS;
  payload: ReceivedComments[];
};

export type FetchTCommentsFailure = {
  type: typeof SET_COMMENTS_ERROR;
  payload: string;
};

export type CommentsAction = FetchCommentsRequest | FetchCommentsSuccess | FetchTCommentsFailure;
