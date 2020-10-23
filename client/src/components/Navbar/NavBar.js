import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';


export default function NavBar () {


    return(
<>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <img
            alt=""
            src= "https://github.com/Tarmity/poseura/blob/main/client/src/components/Images/logo.png?raw=true"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Poseura
        </Navbar.Brand>
        <Link style={{ color: '#FF5E0E' }} to="/home">Home</Link>
      </Navbar>
    </>

    )
}