import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ReceivedPost } from '../../types';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../redux/actions/actionsCreator';

const Post: React.FC<ReceivedPost> = (post) => {
  const isLoading = false;
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(post.id);
    dispatch(fetchComments(post.id));
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
