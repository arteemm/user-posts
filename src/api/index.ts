import { instance } from './request';
import { ReceivedPost } from '../types';

export const getPosts: () => Promise<ReceivedPost> = async () => {
  const request = await instance.get('/posts');
  return request.data;
};
