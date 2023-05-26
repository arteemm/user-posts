import { instance } from './request';
import { ReceivedPost, ReceivedComments } from '../types';

export const getPosts: () => Promise<ReceivedPost> = async () => {
  const request = await instance.get('/posts');
  return request.data;
};

export const getComments: (idPost: number) => Promise<ReceivedComments> = async (idPost) => {
  const request = await instance.get(`/posts/${idPost}/comments`);
  return request.data;
};
