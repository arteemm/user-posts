import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ReceivedPost } from '../../types';
import { useDispatch } from 'react-redux';
import { fetchComments, setCurrentPostId } from '../../redux/actions/actionsCreator';
import { useAppSelector } from '../../hooks/redux';
import CommentsList from '../CommentsList';

const Post: React.FC<ReceivedPost> = (post) => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const { pending, comments } = useAppSelector((store) => store.comments);
  const { currentPostId } = useAppSelector((store) => store.posts);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setCurrentPostId(post.id));
    setClick(!click);
    dispatch(fetchComments(post.id));
  };

  return (
    <Card style={{ width: '35rem' }} className="m-2">
      <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/user.jpg'} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button
          className="left"
          variant="outline-info"
          disabled={pending && currentPostId === post.id}
          onClick={!pending ? handleClick : undefined}
        >
          {pending && currentPostId === post.id ? 'Loading…' : 'Комментарии'}
        </Button>
        <div>
          {comments[post.id] ? click ? <CommentsList comments={comments[post.id]} /> : null : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
