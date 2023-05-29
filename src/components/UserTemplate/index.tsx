import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import User from '../User';
import Post from '../Post';

const UserTemplate: React.FC = () => {
  const { user, error } = useAppSelector((store) => store.user);
  const { posts } = useAppSelector((store) => store.posts);
  const userPosts = posts.filter((item) => item.userId === user.id);

  if (!user.name && error) {
    return (
      <Alert variant="danger" className="m-4">
        {error}
      </Alert>
    );
  }

  return (
    <Container className="p-3">
      <p className="h3 mb-4">{`Информация о пользователе ${user.name}`}</p>
      <User {...user} />
      <Row>
        <p className="h3 mb-4">{`Посты ${user.name}`}</p>
        {userPosts.map((item) => {
          return <Post key={item.id} {...item} />;
        })}
      </Row>
    </Container>
  );
};

export default UserTemplate;
