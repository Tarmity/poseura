import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function NavBar () {


    return(
<>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <img
            alt=""
            src= "https://github.com/Tarmity/poseura/blob/main/client/src/components/Images/Logo2.png?raw=true"
            width="80"
            height="40"
            className="d-inline-block align-top"
          />{' '}
     
        </Navbar.Brand>
        <Link style={{ color: '#FF5E0E' }} to="/home">Home</Link>
      </Navbar>
    </>

    )
}