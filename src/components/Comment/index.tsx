import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ReceivedComment } from '../../types';

const Comment: React.FC<ReceivedComment> = (comment) => {
  return (
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{`email: ${comment.email}`}</div>
        {`комментарий: ${comment.body}`}
      </div>
    </ListGroup.Item>
  );
};

export default Comment;
