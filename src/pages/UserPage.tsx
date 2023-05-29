import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../redux/actions/actionsCreator';
import { useDispatch } from 'react-redux';
import { SpinnerWrapper, UserTemplate } from '../components';

const UserPage: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(+userId));
    }
  }, []);

  return (
    <SpinnerWrapper>
      <UserTemplate />
    </SpinnerWrapper>
  );
};

export default UserPage;
