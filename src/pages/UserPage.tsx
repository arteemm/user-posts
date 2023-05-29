import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../hooks/redux';
import { fetchUser } from '../redux/actions/actionsCreator';
import { useDispatch } from 'react-redux';
import { SpinnerWrapper } from '../components';

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
      <p className="h2">Информация о пользователе</p>
    </SpinnerWrapper>
  );
};

export default UserPage;
