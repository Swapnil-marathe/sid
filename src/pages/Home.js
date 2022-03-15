import React from 'react';
import Homes from '../components/images/Home.jpg';
import Navigation from '../components/Navigation';
import { Button, Navbar, Nav, Form, NavDropdown, FormControl, Container } from 'react-bootstrap';
//import Searchform from '../components/Searchform';
import Searchform from '../components/form';

function Home() {
  return (
    <>
      <marquee width="100%" direction="right" height="20px" scrollamount="5">
        <b>Book Online or Call 1800000</b>
      </marquee>
    <div className='row'>
      <div className='col-6'>
       <Searchform />
      
      </div>
      <div className='col'>
      
      </div>

    </div>
      <br />
    </>
  )
}
export default Home;