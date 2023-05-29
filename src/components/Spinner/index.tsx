import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Spinner } from 'react-bootstrap';

type ChildrenProps = {
  children: React.ReactNode;
};

const SpinnerWrapper = (props: ChildrenProps) => {
  const { pending: postPending } = useAppSelector((state) => state.posts);
  const { pending: userPending } = useAppSelector((state) => state.user);
  return postPending || userPending ? (
    <div className="spinner-wrapper">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <>{props.children}</>
  );
};

export default SpinnerWrapper;
