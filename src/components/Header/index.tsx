import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Posts page</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/aboutme">about me</Nav.Link>
          <Nav.Link href="/user">User</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
