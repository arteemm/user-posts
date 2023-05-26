import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ReceivedPost } from '../../types';
import { ReactReduxContextInstance } from 'react-redux/es/components/Context';

const Post: React.FC<ReceivedPost> = (post) => {
  const isLoading = false;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(1111);
  };

  return (
    <Card style={{ width: '16rem' }} className="m-2">
      <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/user.jpg'} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button
          className="left"
          variant="outline-info"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : undefined}
        >
          {isLoading ? 'Loading…' : 'Click to load'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
