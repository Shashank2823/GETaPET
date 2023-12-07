import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/" className="Logo">
            <img
              alt=""
              src="/images/Logo.jpg"
              width="100"
              height="100"
              className="d-inline-block align-top logo-image"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll">
              <Nav.Link as={Link} to="/" className="Links">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/Pets" className="Links">
                PETS
              </Nav.Link>
              <Nav.Link as={Link} to="/Adopt" className="Links">
                ADOPT
              </Nav.Link>
              <Nav.Link as={Link} to="/About" className="Links">
                ABOUT US
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/Login" className="btn btn-outline-success">
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
