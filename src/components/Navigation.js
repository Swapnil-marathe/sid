import React from 'react';
import Logo from './images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav } from 'react-bootstrap';
import '../App.css';

function Navigation() {
    return (
      
      <Navbar className="Myred">
          <Navbar.Brand >
           <img src={Logo} width ="60px" height="60px" /> HOTEL
          </Navbar.Brand>
          
          <Nav>
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="Find">Find Hotel</Nav.Link>
              <Nav.Link href="Map">Location Map</Nav.Link>
              <Nav.Link href="ContactUs">Contact Us</Nav.Link>
              <Nav.Link href="AboutUs">About Us</Nav.Link>
              <Nav.Link href="Login" className="login">Login</Nav.Link>
              
          </Nav>

      </Navbar>
      
    );
  }
  
  export default Navigation;