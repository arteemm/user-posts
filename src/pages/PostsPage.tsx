import React from 'react';
import { PostsList, SpinnerWrapper } from '../components';

const PostsPage: React.FC = () => {
  return (
    <SpinnerWrapper>
      <PostsList />
    </SpinnerWrapper>
  );
};

export default PostsPage;
