import React, { useEffect } from 'react';
import { PostsList, SpinnerWrapper } from '../components';
import { fetchPosts } from '../redux/actions/actionsCreator';
import { useDispatch } from 'react-redux';

const PostsPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <SpinnerWrapper>
      <PostsList />
    </SpinnerWrapper>
  );
};

export default PostsPage;
