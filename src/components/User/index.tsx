import React from 'react';
import { ReceivedUser } from '../../types';
import { Row, Col } from 'react-bootstrap';

const User: React.FC<ReceivedUser> = (user) => {
  return (
    <Row className="mb-4">
      <Col>
        <Row>
          <p>{`Имя пользвателя: ${user.name}`}</p>
        </Row>
        <Row>
          <p>{`email: ${user.email}`}</p>
        </Row>
        <Row>
          <p>{`телефон: ${user.phone}`}</p>
        </Row>
      </Col>
      <Col>
        <Row>
          <p>{`website: ${user.website}`}</p>
        </Row>
        <Row>
          <p>{`Компания: ${user.company.name}`}</p>
        </Row>
        <Row>
          <p>{`Город: ${user.address.city}`}</p>
        </Row>
      </Col>
    </Row>
  );
};

export default User;
