import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../redux/actions/actionsCreator';
import { useDispatch } from 'react-redux';
import { SpinnerWrapper, UserTemplate } from '../components';
import { useAppSelector } from '../hooks/redux';

const UserPage: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.id;
  const { user } = useAppSelector((store) => store.user);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(+userId));
    }
  }, []);

  return <SpinnerWrapper>{user.id ? <UserTemplate /> : null} </SpinnerWrapper>;
};

export default UserPage;
