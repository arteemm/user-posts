import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Post from '../Post';
import { useAppSelector } from '../../hooks/redux';
import PaginationPosts from '../Pagination';

const PostsList: React.FC = () => {
  const { posts } = useAppSelector((store) => store.posts);
  const [page, setPage] = useState(1);

  return (
    <Container className="p-4">
      <Row>
        {posts.length
          ? posts.slice(page * 10 - 10, page * 10).map((post) => {
              return <Post key={post.id} {...post} />;
            })
          : null}
      </Row>
      <PaginationPosts activePage={page} setPage={setPage} />
    </Container>
  );
};

export default PostsList;
