import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
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
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Pets" className="nav-link Links">
                PETS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Adopt" className="nav-link Links">
                ADOPT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link Links">
                ABOUT US
              </Link>
            </li>
          </ul>
         
              <Link to="/Login" className="btn btn-outline-success" >
              LOGIN
              </Link>
          
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;
