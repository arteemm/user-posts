import React from 'react';
import { Card } from 'react-bootstrap';
import { ReceivedPost } from '../../types';

const Post: React.FC<ReceivedPost> = (post) => {
  return (
    <Card style={{ width: '16rem' }} className="m-2">
      <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/user.jpg'} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
