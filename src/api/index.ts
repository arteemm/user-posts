import { instance } from './request';
import { ReceivedPost, ReceivedComment } from '../types';

export const getPosts: () => Promise<ReceivedPost> = async () => {
  const request = await instance.get('/posts');
  return request.data;
};

export const getComments: (idPost: number) => Promise<ReceivedComment> = async (idPost) => {
  const request = await instance.get(`/posts/${idPost}/comments`);
  return request.data;
};
