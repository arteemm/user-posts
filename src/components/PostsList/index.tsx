import React, { useState } from 'react';
import { Container, Row, Alert } from 'react-bootstrap';
import Post from '../Post';
import { useAppSelector } from '../../hooks/redux';
import PaginationPosts from '../Pagination';

const PostsList: React.FC = () => {
  const { currentPosts, error } = useAppSelector((store) => store.posts);
  const [page, setPage] = useState(1);

  if (!currentPosts.length && error) {
    return (
      <Alert variant="danger" className="m-4">
        {error}
      </Alert>
    );
  }

  if (!currentPosts.length) {
    return (
      <Alert variant="info" className="m-4">
        Ничего не найдено
      </Alert>
    );
  }

  return (
    <Container className="p-4">
      <Row>
        {currentPosts.length
          ? currentPosts.slice(page * 10 - 10, page * 10).map((post) => {
              return <Post key={post.id} {...post} />;
            })
          : null}
      </Row>
      <PaginationPosts activePage={page} setPage={setPage} />
    </Container>
  );
};

export default PostsList;
