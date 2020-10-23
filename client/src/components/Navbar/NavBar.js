import React from 'react';
import { Navbar } from 'react-bootstrap';
import {} from 'react-router-dom';
import logo from '../Images/logo.png';


export default function NavBar () {


    return(
<>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src= "../Images/logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </>

    )
}