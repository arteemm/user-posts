import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ReceivedComment } from '../../types';
import Comment from '../Comment';

type Props = {
  comments: ReceivedComment[];
};

const CommentsList: React.FC<Props> = ({ comments }) => {
  console.log(comments);
  return (
    <ListGroup as="ol" numbered className="m-4">
      {Array.from(comments).map((item) => {
        console.log(item);
        return <Comment key={item.id} {...item} />;
      })}
    </ListGroup>
  );
};

export default CommentsList;
