import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Image, Col, Row } from 'react-bootstrap';

const NavMenu: React.FC = () => {
  return (
    <Navbar key="false" expand="false">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbar-expand-md"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbar-expand-md">Меню</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column justify-content-between pe-3 h-100">
              <div className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/aboutme">
                  Обо мне
                </Nav.Link>
                <Nav.Link as={Link} to="/user">
                  Список постов
                </Nav.Link>
              </div>
              <Container>
                <Row>
                  <Col>
                    <Image
                      fluid
                      roundedCircle
                      src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
                    />
                  </Col>
                  <Col>
                    <p className="h3">Артем</p>
                    <Nav.Link href="mailto:arteemmarteemm@gmal.com">
                      Почта: arteemmarteemm@gmal.com
                    </Nav.Link>
                  </Col>
                </Row>
              </Container>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
