import {
  SET_POSTS_REQUEST,
  SET_POSTS,
  SET_POSTS_ERROR,
  SET_COMMENTS,
  SET_COMMENTS_ERROR,
  SET_COMMENTS_REQUEST,
  SET_CURRENT_POST_ID,
  SET_CURRENT_POSTS,
  SET_USER,
  SET_USER_ERROR,
  SET_USER_REQUEST,
} from '../redux/constants';

export type ReceivedPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ReceivedComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type ReceivedCommentsList = {
  [key: string]: ReceivedComment[];
};

export type Posts = {
  pending: boolean;
  posts: ReceivedPost[];
  error: string | null;
  currentPostId: number;
  currentPosts: ReceivedPost[];
};

export type Comments = {
  pending: boolean;
  comments: ReceivedCommentsList;
  error: string | null;
};
export interface FetchPostsRequest {
  type: typeof SET_POSTS_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof SET_POSTS;
  payload: ReceivedPost[];
};

export type FetchPostsFailure = {
  type: typeof SET_POSTS_ERROR;
  payload: string;
};

export type SetCurrentPostIdType = {
  type: typeof SET_CURRENT_POST_ID;
  payload: number;
};

export type SortCurrentPostsType = {
  type: typeof SET_CURRENT_POSTS;
  payload: ReceivedPost[];
};

export type PostAction =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
  | SetCurrentPostIdType
  | SortCurrentPostsType;

export interface FetchCommentsRequest {
  type: typeof SET_COMMENTS_REQUEST;
}

export type FetchCommentsSuccess = {
  type: typeof SET_COMMENTS;
  payload: ReceivedComment[];
};

export type FetchCommentsFailure = {
  type: typeof SET_COMMENTS_ERROR;
  payload: string;
};

export type CommentsAction = FetchCommentsRequest | FetchCommentsSuccess | FetchCommentsFailure;

export type ReceivedUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type User = {
  pending: boolean;
  user: ReceivedUser;
  error: string | null;
};
export interface FetchUserRequest {
  type: typeof SET_USER_REQUEST;
}

export type FetchUserSuccess = {
  type: typeof SET_USER;
  payload: ReceivedUser;
};

export type FetchUserFailure = {
  type: typeof SET_USER_ERROR;
  payload: string;
};

export type UserAction = FetchUserRequest | FetchUserSuccess | FetchUserFailure;
