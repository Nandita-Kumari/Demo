import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './navbar.css';

function MyNavbar({ backgroundColor }) {

  const location = useLocation();

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? '#FFADAD' : '#000',
    fontWeight: '600',
    borderBottom: location.pathname === path ? '2px solid #FFADAD' : 'none',
    fontFamily: 'sans-serif'
  });

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom" style={{ backgroundColor }}>
      <Container>
        <Navbar.Brand href="/">TAILOR SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="/" style={getLinkStyle('/')}>Home</Nav.Link>
            <Nav.Link href="/#/about" style={getLinkStyle('/about')}>About</Nav.Link>
           
         
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
