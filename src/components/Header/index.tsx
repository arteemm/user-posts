import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Posts page
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/aboutme">
            about me
          </Nav.Link>
          <Nav.Link as={Link} to="/user">
            User
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
