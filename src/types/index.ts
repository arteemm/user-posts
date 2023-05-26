import { SET_POSTS_REQUEST, SET_POSTS, SET_POSTS_ERROR } from '../redux/constants';

export type ReceivedPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Posts = {
  pending: boolean;
  posts: ReceivedPost[];
  error: string | null;
};
export interface FetchPostsRequest {
  type: typeof SET_POSTS_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof SET_POSTS;
  payload: ReceivedPost[];
};

export type FetchTodoFailure = {
  type: typeof SET_POSTS_ERROR;
  payload: string;
};

export type PostAction = FetchPostsRequest | FetchPostsSuccess | FetchTodoFailure;
