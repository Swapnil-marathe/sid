import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"

const Menu = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/Home">INDIAN HOTELS </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
       
        <Nav>
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="Find">Find Hotel</Nav.Link>
              <Nav.Link href="Map">Location Map</Nav.Link>
              <Nav.Link href="ContactUs">Contact Us</Nav.Link>
              <Nav.Link href="AboutUs">About Us</Nav.Link>
             
              
          </Nav>
      </Nav>
      <Nav>
      <Nav.Link href="Login" className="login">Login</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Menu;