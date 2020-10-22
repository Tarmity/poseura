import React from 'react';
import {  Container, Jumbotron } from 'react-bootstrap';
import './JumboHome.css';



function JumboHome () {


    
         return(

            <Jumbotron  className= "jumbo" fluid >
            <Container>
              <h1 className="header">Welcome to Poseur</h1>
              <p className= "para">
                A community photographers capturing moments in time to cherish
              </p>
            </Container>
          </Jumbotron>

         )
   
}

export default JumboHome;