import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
<<<<<<< HEAD
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
=======
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:'99px'}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src="/images/Logo.jpg"
            width="100"
            height="100"
            padding="-10px"
            borderRadius="100px"
            className="d-inline-block align-top"
          />
        </Link>
        <p className="Title">
          GETaPET
        </p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link Links ">
>>>>>>> main
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
<<<<<<< HEAD
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
=======
              </Link>
            </li>
          </ul>
         
              <Link to="/Login" className="btn btn-outline-success" >
              LOGIN
              </Link>
          
        </div>
      </div>
    </nav>
>>>>>>> main
    </div>
  );
}

export default NavBar;
